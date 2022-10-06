import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const URL = 'assets/data/RE.json';
@Injectable({
    providedIn: "root"
}
)

export class REServices{
    constructor(private http:HttpClient){}
    getAll(){
       return this.http.get(URL)
    }
} 