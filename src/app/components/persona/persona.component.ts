import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  nombres:string=''; 
  apellidos:string='';
  telefono:string='';
  edad:string='';

  constructor() { }

  ngOnInit() {
  }

  registrarNombre(event)
  {
  	console.log(this.nombres);
  }

}
