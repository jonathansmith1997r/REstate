import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { InmueblesService } from '../app/components/Precios/precios/inmuebles.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    inmueble = null;
    inmuebleForm = new FormGroup({
      Ubiacion : new FormControl(''),
      Precio : new FormControl(''),
      Tipo : new FormControl('')
 
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
  eliminarInmueble(Id_Productos:any):void{
    console.log(Id_Productos)
    if(window.confirm("¿Estas seguro de querer eliminar?")){
      this.inmuebleServicio.bajaInmueble(Id_Productos).subscribe(() => {
        this.obtenerInmueble();
      },(error) => {
        console.error(error);
    })
   }
  }
  title = 'ProyectoFinal';
}
