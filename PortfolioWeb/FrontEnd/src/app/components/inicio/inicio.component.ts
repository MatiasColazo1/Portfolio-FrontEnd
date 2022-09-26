import { Component, OnInit} from '@angular/core';
import { Modal } from 'bootstrap';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona: persona = new persona("","","","","","");
  


  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  nombre: string = '';
  apellido: string = '';
  img: string = '';
  titulo: string = '';
  gitLink: string = '';
  linLink: string = '';
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#fff'
    })
    
    writer
      .type('Bienvenido!')
      .rest(500)
      .changeOps({ deleteSpeed: 60 })
      .remove(11)
      .type('Welcome!')
      .rest(500)
      .clear()
      .start()
  }
  

  body: string = '';
  testModal?: Modal | undefined;
  deleteModal?: Modal | undefined;
  editModal?: Modal | undefined;

  openEdit() {
    var el_testModal = document.getElementById('editPersModal');
    var button = document.createElement('button');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: false
      });
    }
    this.testModal?.show();

  }
  editar() {
    let id = 1;
    const personaActualizada = new persona(this.nombre, this.apellido, this.img, this.titulo, this.gitLink, this.linLink);
    console.log(personaActualizada);
    this.personaService.update(id, personaActualizada).subscribe(
      data => {
        this.personaService.getPersona().subscribe(data => {
          this.persona = data;
        });
      }, err => {
        this.error();
      });
  }

  error():void{
    var el_testModal = document.getElementById('errorBannerModal');
    var button =document.createElement('button');
    if (el_testModal ) {
      this.testModal= new Modal(el_testModal , {
        keyboard: false
      });
    }
    this.testModal?.show();
  }


}

