import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Location } from '@angular/common';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi-e',
  templateUrl: './sobremi-e.component.html',
  styleUrls: ['./sobremi-e.component.css']
})
export class SobremiEComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(private  sExperiencia: SExperienciaService, private tokenService: TokenService, public _router: Router, public _location:Location) { }
  
  body:string = '';
  testModal?: Modal | undefined;
  deleteModal?: Modal | undefined;
  editModal?: Modal | undefined;
  isLogged = false;

  valorLista?:number;
  nombreE:string = '';
  descripcionE:string = '';
  fechaE:string= '';

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  
 // ***************** Métodos para AGREGAR experiencia y su modal ***************************
 save(){
  this.testModal?.toggle();
  const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.fechaE);
  this.sExperiencia.save(experiencia).subscribe(
    data=>{
      this.cargarExperiencia();
      this.actualizarComponente();
    }, err =>{
      this.error();
    })
}

open() {
  var el_testModal = document.getElementById('testModal');
  //var button =document.createElement('button');
  if (el_testModal ) {
    this.testModal= new Modal(el_testModal , {
      keyboard: false
    });
  }
  this.testModal?.show();
}

cargarExperiencia():void{
  this.sExperiencia.lista().subscribe(data => {this.expe = data;})
}

// ************************ Modal para BORRAR con el modal y su respectivo botón **************
openDelete(id?:number) {
  this.valorLista=id;
  var el_testModal = document.getElementById('deleteModal');
  var button =document.createElement('button');
  if (el_testModal ) {
    this.testModal= new Modal(el_testModal , {
      keyboard: false
    });
  }
  this.testModal?.show();
}
delete(id?:number){
  if(id != undefined){
    this.sExperiencia.delete(id).subscribe(
      data=>{
        this.cargarExperiencia();
        this.actualizarComponente();
      }, err=>{
        
    });
  }
  this.cargarExperiencia();
}


//**********************Métodos para EDITAR con el modal y su botón respectivo ***********************
openEdit(id?: number) {
  this.valorLista=id;
  var el_testModal = document.getElementById('editModal');
  var button =document.createElement('button');
  if (el_testModal ) {
    this.testModal= new Modal(el_testModal , {
      keyboard: false
    });
  }
  this.testModal?.show();
}

update(id:number){
  const experienciaEditar = new Experiencia(this.nombreE, this.descripcionE, this.fechaE);
  this.sExperiencia.update(id, experienciaEditar).subscribe(
    data =>{
      this.cargarExperiencia();
      this.actualizarComponente();
    }, err=>{
      this.error();
    }
  )
}



/* Modal para errores */
error():void{
  var el_testModal = document.getElementById('errorModal');
  var button =document.createElement('button');
  if (el_testModal ) {
    this.testModal= new Modal(el_testModal , {
      keyboard: false
    });
  }
  this.testModal?.show();
}

actualizarComponente():void{
  this._router.navigateByUrl("/inicioComponent", {skipLocationChange:true}).then(()=>{
    this._router.navigate([decodeURI(this._location.path())]);
  });
}

}
