import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AgentesService } from './agentes.service';
@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {
  agente = null;
  agenteForm = new FormGroup({
    Nombre : new FormControl(''),
    Telefono : new FormControl(''),
    Email : new FormControl('')

  });
  constructor(private agenteServicio: AgentesService ){}
ngOnInit(): void {
  this.obtenerAgente();

}
obtenerAgente(){
  this.agenteServicio.obtenerAgente().subscribe(
    (result:any)=> this.agente = result
  );
}

Agregar(): void {
  this.agenteServicio.altaAgente(this.agenteForm.value).subscribe(() => {
    this.obtenerAgente();      
  })
}
bajaAgente(IdInmueble:any):void{
  console.log(IdInmueble)
  if(window.confirm("¿Estas seguro de querer eliminar?")){
    this.agenteServicio.bajaAgente(IdInmueble).subscribe(() => {
      this.obtenerAgente();
    },(error) => {
      console.error(error);
  })
 }
}


}
