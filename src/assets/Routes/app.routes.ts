import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from '../../app/components/Inicio/inicio/inicio.component'
import { AboutComponent } from 'src/app/components/About/about/about.component';
import { PreciosComponent } from 'src/app/components/Precios/precios/precios.component';
const routes : Routes = [
  {path:'Inicio',component:InicioComponent  },
  {path:'About',component:AboutComponent    },
  {path:'Precios',component:PreciosComponent}
]
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes,{useHash: true,
    relativeLinkResolution: 'legacy'}),],
  ],
  exports:[RouterModule],

  declarations: []
})
export class AppRoutingModule { }
