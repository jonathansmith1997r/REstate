import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InmueblesService {
  URL = "http://localhost/API_PHP/";
  constructor(private http: HttpClient) { }
  obtenerInmueble() {
    return this.http.get(`${this.URL}ObtenerInmueble.php`);
  }

  altaInmueble(inmueble: any) {
    return this.http.post(`${this.URL}AltaInmueble.php`, JSON.stringify(inmueble));
  }

  bajaInmueble(IdInmueble: number) {
    return this.http.get(`${this.URL}BajaInmueble.php?IdInmueble=${IdInmueble}`);
  }

  seleccionarInmueble(IdInmueble: number) {
    return this.http.get(`${this.URL}SeleccionarInmueble.php?idInmueble=${IdInmueble}`);
  }
}
