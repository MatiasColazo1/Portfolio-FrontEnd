import { Component, OnInit} from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#fff'
    })
    
    writer
      .type('Hola, soy desarrollador web full stack')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(37)
      .type('i, i´m a full stack web developer')
      .rest(500)
      .clear()
      .start()
  }

}
