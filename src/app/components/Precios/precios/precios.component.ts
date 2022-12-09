import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { InmueblesService } from './inmuebles.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  inmueble = null;
  inmuebleForm = new FormGroup({
    Direccion : new FormControl(''),
    precio : new FormControl(''),
    tipo : new FormControl('')

  });
constructor(private inmuebleServicio: InmueblesService ){}
ngOnInit(): void {
  this.obtenerInmueble();

}
obtenerInmueble(){
  this.inmuebleServicio.obtenerInmueble().subscribe(
    (result:any)=> this.inmueble = result
  );
}

Agregar(): void {
  this.inmuebleServicio.altaInmueble(this.inmuebleForm.value).subscribe(() => {
    this.obtenerInmueble();      
  })
}
bajaInmueble(IdInmueble:any):void{
  console.log(IdInmueble)
  if(window.confirm("¿Estas seguro de querer eliminar?")){
    this.inmuebleServicio.bajaInmueble(IdInmueble).subscribe(() => {
      this.obtenerInmueble();
    },(error) => {
      console.error(error);
  })
 }
}}