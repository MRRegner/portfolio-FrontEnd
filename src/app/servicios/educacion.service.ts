import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //url="http://localhost:8080/educacion/editar/";
  url="https://pure-reef-99211.herokuapp.com";
  constructor(private http:HttpClient) { }

  obtenerDatos(id:any):Observable<any>{
    //console.log("El servicio educacion esta corriendo");
    return this.http.get<any>(this.url+'/educacion/trae/'+id);
  }

  Crear(datos:any):Observable<any>
  {
    //console.log("El servicio de Creacion de educacion funciona"+ datos);
    return this.http.post<any>(this.url+'/educacion/crear/',datos)
  }

  Editar(datos:any):Observable<any>
  {
    //console.log("El servicio de edicion de educacion");
    return this.http.put<any>(this.url+'/educacion/editar/'+datos.id+'?escuela='+ datos.escuela +'&finalizacion='+ datos.finalizacion +
    '&titulo='+datos.titulo+'&logo='+datos.logo+'&persona_id='+ datos.persona_id , datos);
  }

  Borrar(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/educacion/borrar/'+id);
  }
}
