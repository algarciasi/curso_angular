import { Component } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {

  persona:Persona = {
    nombre: 'Alberto Garcia',
    edad: 30
  };

 numero: number=1;

 decrementar(){
  this.numero--;
 }

 incrementar(){
  this.numero++;
 }
}
