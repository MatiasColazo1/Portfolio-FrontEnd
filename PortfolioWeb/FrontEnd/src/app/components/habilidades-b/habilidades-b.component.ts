import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { Back } from 'src/app/model/back';
import { BackService } from 'src/app/service/back.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades-b',
  templateUrl: './habilidades-b.component.html',
  styleUrls: ['./habilidades-b.component.css']
})
export class HabilidadesBComponent implements OnInit {
  back: Back[] = [];
  
  nombreB: string;
  porcentajeB: number;

  skillUser: any;

  constructor(private backService: BackService, private tokenService: TokenService) { }
  isLogged = false;

   /* Variables que van al modal */
   valorHabilidadB?: number;
   bodyB: string = '';
   testModalB?: Modal | undefined;
   deleteModalB?: Modal | undefined;
   editModalB?: Modal | undefined;

 

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarHabilidad() {
    this.backService.lista().subscribe(
      data => {
        this.back = data;
      }
    )
  }

  openB() {
    var el_testModalB = document.getElementById('skillModalB');
    if (el_testModalB) {
      this.testModalB = new Modal(el_testModalB, {
        keyboard: false
      });
    }
    this.testModalB?.show();
  }

  //Selecciona la habilidad en base al valor otorgado en el formulario
  seleccionadoB(id: string) {
    switch (id) {
      case "0":
        
        this.nombreB = "Java";
        break;
      case "1":
      
        this.nombreB = "Java (Spring Boot)";
        break;
      case "2":
        
        this.nombreB = "Python";
        break;
      case "3":
       
        this.nombreB = "PHP";
        break;
      case "4":
       
        this.nombreB = "Node";
        break;
      case "5":
        
        this.nombreB = "MongoDB";
        break;
      case "6":
       
        this.nombreB = "MySQL";
        break;
      case "7":
        

      default:
        break;
    }
  }

  progreso: number;
  submitB() {
    //toma el valor de la lista desplegable 
    var valorSeleccionadoB = (<HTMLInputElement>document.getElementById("skillOptionB")).value;

    //envia el valor a la funcion switch para setear los cambios 
    this.seleccionadoB(valorSeleccionadoB); //Muestra la id o el valor de la habilidad seleccionada

    //obtenemos el valor del progreso y lo convertimos a integer
    this.porcentajeB = parseInt((<HTMLInputElement>document.getElementById("progresoVarB")).value);



    const nuevaHabilidadB = new Back(this.nombreB, this.porcentajeB);
    this.backService.save(nuevaHabilidadB).subscribe(
      data => {
        console.log("Se cargó correctamente");
        this.cargarHabilidad();
      }
    )
  }

  openDeleteB(id?: number) {
    this.valorHabilidadB = id;
    var el_testModalB = document.getElementById('deleteHabModalB');
    var buttonB = document.createElement('buttonB');
    if (el_testModalB) {
      this.testModalB = new Modal(el_testModalB, {
        keyboard: false
      });
    }
    this.testModalB?.show();
  }
  deleteB(id?: number) {
    if (id != undefined) {
      this.backService.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {

        });
    }
    this.cargarHabilidad();
  }

  openEditB(id?: number) {
    this.valorHabilidadB = id;
    var el_testModalB = document.getElementById('skillEditModalB');
    var buttonB = document.createElement('buttonB');
    if (el_testModalB) {
      this.testModalB = new Modal(el_testModalB, {
        keyboard: false
      });
    }
    this.testModalB?.show();
  }

  updateB(id?: number) {
    //toma el valor de la lista desplegable 
    var valorSeleccionadoB = (<HTMLInputElement>document.getElementById("skillEditOptionB")).value;

    //envia el valor a la funcion switch para setear los cambios 
    this.seleccionadoB(valorSeleccionadoB);

    //obtenemos el valor del progreso y lo convertimos a integer
    this.porcentajeB = parseInt((<HTMLInputElement>document.getElementById("editProgresoB")).value);

    const nuevaHabilidadB = new Back(this.nombreB, this.porcentajeB);
    this.backService.update(id, nuevaHabilidadB).subscribe(
      data => {
        this.cargarHabilidad();
      }
    )
  }

  /* Modal para errores */
  errorB(): void {
    var el_testModalB = document.getElementById('errorSkillModalB');
    var buttonB = document.createElement('buttonB');
    if (el_testModalB) {
      this.testModalB = new Modal(el_testModalB, {
        keyboard: false
      });
    }
    this.testModalB?.show();
  }
}
