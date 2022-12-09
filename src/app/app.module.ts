import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {InmueblesService} from '../app/components/Precios/precios/inmuebles.service';
import {AgentesService} from '../app/components/Agentes/agentes/agentes.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {AppRoutingModule} from '../assets/Routes/app.routes';
import { InicioComponent } from './components/Inicio/inicio/inicio.component';
import { AboutComponent } from './components/About/about/about.component';
import { PreciosComponent } from './components/Precios/precios/precios.component';
import { AgentesComponent } from './components/Agentes/agentes/agentes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    PreciosComponent,
    AgentesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    InmueblesService,
    AgentesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
