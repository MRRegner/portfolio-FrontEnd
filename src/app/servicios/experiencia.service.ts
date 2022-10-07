import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //url="http://localhost:8080/experiencia/editar/";
  url="https://pure-reef-99211.herokuapp.com";
  constructor(private http:HttpClient) { }

  obtenerDatos(id:any):Observable<any>{ 
    return this.http.get<any>(this.url+'/experiencia/trae/'+id);
  }
  Crear(datos:any):Observable<any>
  {
    return this.http.post<any>(this.url+'/experiencia/crear/',datos)
  }

  Editar(datos:any):Observable<any>
  {
   return this.http.put<any>(this.url+'/experiencia/editar/'+datos.id+'?empresa='+ datos.empresa +'&puesto='+ datos.puesto +
   '&descripcion='+datos.descripcion+ '&periodo='+ datos.periodo +'&persona_id='+ datos.persona_id , datos);
  }
  Borrar(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/experiencia/borrar/'+id);
  }
}
