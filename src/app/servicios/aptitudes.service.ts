import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  //url="http://localhost:8080/skills/editar/";
  url="https://pure-reef-99211.herokuapp.com";
  constructor(private http:HttpClient) { }

  obtenerDatos(id:any):Observable<any>{    
    return this.http.get<any>(this.url+'/skills/trae/'+id);
  }
  Crear(datos:any):Observable<any>
  {
    return this.http.post<any>(this.url+'/skills/crear/',datos)
  }
  Editar(datos:any):Observable<any>
  {
   return this.http.put<any>(this.url+'/skills/editar/'+datos.id+'?tecnologia='+ datos.tecnologia +'&nivel='+ datos.nivel +
   '&persona_id='+ datos.persona_id , datos);
   
  }
  Borrar(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/skills/borrar/'+id);
  }
}
