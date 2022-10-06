import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/NAVBAR/navbar/navbar.component';
import {AppRoutingModule} from '../assets/Routes/app.routes';
import { InicioComponent } from './components/Inicio/inicio/inicio.component';
import { AboutComponent } from './components/About/about/about.component';
import { PreciosComponent } from './components/Precios/precios/precios.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
