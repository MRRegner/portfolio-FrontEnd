import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  url="https://pure-reef-99211.herokuapp.com/personas/editar/";
  
  constructor(private http:HttpClient) {
  
   }

   Editar(datos:any):Observable<any>
   {
    return this.http.put<any>(this.url+datos.id+ '?nombre='+ datos.nombre +'&apellido='+ datos.apellido +'&email='+datos.email
    +'&descripcion=' + datos.descripcion +'&backimage='+ datos.backimage + '&personimage=' + datos.personimage
    +'&titulo='+ datos.titulo + '&ubicacion='+ datos.ubicacion , datos);
    
   }
}
