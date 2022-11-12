import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {
  //url="http://localhost:8080";
  url="https://pure-reef-99211.herokuapp.com";
  constructor(private http:HttpClient) { }

  obtenerDatos(id:any):Observable<any>{    
    return this.http.get<any>(this.url+'/proyecto/trae/'+id);
  }
  Crear(datos:any):Observable<any>
  {
    return this.http.post<any>(this.url+'/proyecto/crear/',datos)
  }
  Editar(datos:any):Observable<any>
  {
   return this.http.put<any>(this.url+'/proyecto/editar/'+datos.id+'?titulo='+ datos.titulo +'&descripcion='+ datos.descripcion +
   '&imagen='+ datos.imagen + '&url='+ datos.url +'&persona_id='+ datos.persona_id , datos);
   
  }
  Borrar(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/proyecto/borrar/'+id);
  }
}
