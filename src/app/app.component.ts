import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { PersonaComponent } from './components/persona/persona.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { Persona } from './persona';
import { Usuario } from './usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  clienteLista:Persona[]=[];
  @ViewChild(PersonaComponent,{static:false}) persona;
  @ViewChild(UsuarioComponent,{static:false}) usuario;

  registrar()
	{
		//console.log(this.persona.nombres);
		let cliente=new Persona;
		cliente.idPersona=this.clienteLista.length+1;
		cliente.nombres=this.persona.nombres;
		cliente.apellidos=this.persona.apellidos;
		cliente.telefono=this.persona.telefono;
		cliente.edad=this.persona.edad;
		let user= new Usuario;
		user.idUsuario=this.clienteLista.length+1;
		user.correo=this.usuario.correo;
		user.password=this.usuario.password;
		cliente.usuarioC=user;
		//console.log(cliente);
		this.clienteLista.push(cliente);
	}

}

