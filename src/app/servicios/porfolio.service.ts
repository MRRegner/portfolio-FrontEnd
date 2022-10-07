import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  //url:string="http://localhost:8080/cursos/traer";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //console.log("El servicio porfolio esta corriendo");
    
    return this.http.get<any>('https://pure-reef-99211.herokuapp.com/personas/traer');
    
    
  }
}
