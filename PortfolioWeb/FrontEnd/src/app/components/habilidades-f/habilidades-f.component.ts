import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { Front } from 'src/app/model/front';
import { FrontService } from 'src/app/service/front.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades-f',
  templateUrl: './habilidades-f.component.html',
  styleUrls: ['./habilidades-f.component.css']
})
export class HabilidadesFComponent implements OnInit {
  fro: Front[] = [];

  nombreF: string;
  porcentajeF: number;

  skillUser: any;

  constructor(private frontService: FrontService, private tokenService: TokenService) { }
  isLogged = false;

   /* Variables que van al modal */
   valorHabilidad?: number;
   body: string = '';
   testModal?: Modal | undefined;
   deleteModal?: Modal | undefined;
   editModal?: Modal | undefined;


  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarHabilidad() {
    this.frontService.lista().subscribe(
      data => {
        this.fro = data;
      }
    )
  }

  open() {
    var el_testModal = document.getElementById('skillModal');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: false
      });
    }
    this.testModal?.show();
  }

  //Selecciona la habilidad en base al valor otorgado en el formulario
  seleccionado(id: string) {
    switch (id) {
      case "0":
        
        this.nombreF = "HTML";
        break;
      case "1":
      
        this.nombreF = "CSS";
        break;
      case "2":
        
        this.nombreF = "JavaScript";
        break;
      case "3":
       
        this.nombreF = "Bootstrap";
        break;
      case "4":
       
        this.nombreF = "Angular";
        break;
      case "5":
        
        this.nombreF = "TypeScript";
        break;
      case "6":
        
        this.nombreF = "React";
        break;
      case "7":
        
        this.nombreF = "Vue";
        break;
      case "8":
        
      default:
        break;
    }
  }

  progreso: number;
  submit() {
    //toma el valor de la lista desplegable 
    var valorSeleccionado = (<HTMLInputElement>document.getElementById("skillOption")).value;

    //envia el valor a la funcion switch para setear los cambios 
    this.seleccionado(valorSeleccionado); //Muestra la id o el valor de la habilidad seleccionada

    //obtenemos el valor del progreso y lo convertimos a integer
    this.porcentajeF = parseInt((<HTMLInputElement>document.getElementById("progresoVar")).value);



    const nuevaHabilidad = new Front(this.nombreF, this.porcentajeF);
    this.frontService.save(nuevaHabilidad).subscribe(
      data => {
        console.log("Se cargó correctamente");
        this.cargarHabilidad();
      }
    )
  }

  openDelete(id?: number) {
    this.valorHabilidad = id;
    var el_testModal = document.getElementById('deleteHabModal');
    var button = document.createElement('button');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: false
      });
    }
    this.testModal?.show();
  }
  delete(id?: number) {
    if (id != undefined) {
      this.frontService.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {

        });
    }
    this.cargarHabilidad();
  }
  
  openEdit(id?: number) {
    this.valorHabilidad = id;
    var el_testModal = document.getElementById('skillEditModal');
    var button = document.createElement('button');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: false
      });
    }
    this.testModal?.show();
  }

  update(id?: number) {
    //toma el valor de la lista desplegable 
    var valorSeleccionado = (<HTMLInputElement>document.getElementById("skillEditOption")).value;

    //envia el valor a la funcion switch para setear los cambios 
    this.seleccionado(valorSeleccionado);

    //obtenemos el valor del progreso y lo convertimos a integer
    this.porcentajeF = parseInt((<HTMLInputElement>document.getElementById("editProgreso")).value);

    const nuevaHabilidad = new Front(this.nombreF, this.porcentajeF);
    this.frontService.update(id, nuevaHabilidad).subscribe(
      data => {
        this.cargarHabilidad();
      }
    )
  }

  /* Modal para errores */
  error(): void {
    var el_testModal = document.getElementById('errorSkillModal');
    var button = document.createElement('button');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: false
      });
    }
    this.testModal?.show();
  }
}
