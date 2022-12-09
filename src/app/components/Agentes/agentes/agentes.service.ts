import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  URL = "http://localhost/API_PHP/";
  constructor(private http: HttpClient) { }
  obtenerAgente() {
    return this.http.get(`${this.URL}ObtenerAgente.php`);
  }

  altaAgente(agente: any) {
    return this.http.post(`${this.URL}AltaAgente.php`, JSON.stringify(agente));
  }

  bajaAgente(IdAgente: number) {
    return this.http.get(`${this.URL}BajaAgente.php?idAgente=${IdAgente}`);
  }

  seleccionarAgente(IdAgente: number) {
    return this.http.get(`${this.URL}SeleccionarAgente.php?idAgente=${IdAgente}`);
  }

  editarAgente(agente: any) {
    return this.http.post(`${this.URL}EditarAgente.php`, JSON.stringify(agente));
  }
}
