import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Location } from '@angular/common';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi-ed',
  templateUrl: './sobremi-ed.component.html',
  styleUrls: ['./sobremi-ed.component.css']
})
export class SobremiEdComponent implements OnInit {
  edu: Educacion[] = [];
  constructor(private  sEducacion: EducacionService, private tokenService: TokenService, public _router: Router, public _location:Location) { }
  
  bodyD:string = '';
  testModalD?: Modal | undefined;
  deleteModalD?: Modal | undefined;
  editModalD?: Modal | undefined;
  isLogged = false;

  valorListaD?:number;
  nombreD:string = '';
  descripcionD:string = '';
  fechaD:string= '';

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  // ***************** Métodos para AGREGAR experiencia y su modal ***************************
  saveD(){
    this.testModalD?.toggle();
    const educacion = new Educacion(this.nombreD, this.descripcionD, this.fechaD);
    this.sEducacion.save(educacion).subscribe(
      data=>{
        this.cargarEducacion();
        this.actualizarComponenteD();
      }, err =>{
        this.error();
      })
  }

  openD() {
    var el_testModalD = document.getElementById('testModalD');
    if (el_testModalD ) {
      this.testModalD= new Modal(el_testModalD , {
        keyboard: false
      });
    }
    this.testModalD?.show();
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.edu = data;})
  }
  
  // ************************ Modal para BORRAR con el modal y su respectivo botón **************
  openDeleteD(id?:number) {
    this.valorListaD=id;
    var el_testModalD = document.getElementById('deleteModalD');
    var buttonD =document.createElement('buttonD');
    if (el_testModalD ) {
      this.testModalD= new Modal(el_testModalD , {
        keyboard: false
      });
    }
    this.testModalD?.show();
  }
  deleteD(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
          this.actualizarComponenteD();
        }, err=>{
          
      });
    }
    this.cargarEducacion();
  }

  //**********************Métodos para EDITAR con el modal y su botón respectivo ***********************
  openEditD(id?: number) {
    this.valorListaD=id;
    var el_testModalD = document.getElementById('editModalD');
    var buttonD =document.createElement('buttonD');
    if (el_testModalD ) {
      this.testModalD= new Modal(el_testModalD , {
        keyboard: false
      });
    }
    this.testModalD?.show();
  }

  updateD(id:number){
    const educacionEditar = new Educacion(this.nombreD, this.descripcionD, this.fechaD);
    this.sEducacion.update(id, educacionEditar).subscribe(
      data =>{
        this.cargarEducacion();
        this.actualizarComponenteD();
      }, err=>{
        this.error();
      }
    )
  }
    
  /* Modal para errores */
  error():void{
    var el_testModalD = document.getElementById('errorModalD');
    var buttonD =document.createElement('buttonD');
    if (el_testModalD ) {
      this.testModalD= new Modal(el_testModalD , {
        keyboard: false
      });
    }
    this.testModalD?.show();
  }

  actualizarComponenteD():void{
    this._router.navigateByUrl("/inicioComponent", {skipLocationChange:true}).then(()=>{
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

}
