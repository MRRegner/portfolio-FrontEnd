import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacionList:any;
  experienciaList:any;
  showedit:boolean=false;
  showCrear:boolean=false;
  showDelEdu:boolean=false;
  showEditExp:boolean=false;
  showCrearExp:boolean=false;
  showDelExp:boolean=false;
  idToShow:any;
  idToShowExp:any;
  idToDelExp:any;
  idToDelEdu:any;
  fromWhere:any;
  constructor(private datosPorfolio:PorfolioService,private ruta:Router,private educacionService:EducacionService, private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
      this.educacionList=data[0].educacion;
      this.experienciaList=data[0].experiencia;
    });
  }
  //Metodos para EDUCACION

  crearEducacion(){
    this.showCrear=!this.showCrear;
  }

  editarEdu(id:any){
    this.showedit=!this.showedit;
    this.idToShow=id;
  }
  
  borrarEducacion(id: any) {
    this.showDelEdu=!this.showDelExp;  
    this.idToDelEdu=id;
  }

  //Metodos para EXPERIENCIA

  crearExp(){
    this.showCrearExp=!this.showCrearExp;

  }
  editarExp(id:any){
    this.showEditExp=!this.showEditExp;
    this.idToShowExp=id;
  }

  borrarExp(id: any) {
    this.showDelExp=!this.showDelExp;  
    this.idToDelExp=id;
  }
///Despues de realizar edicion, creado o borrado muestra los datos actualizados.
  reloadData(fromWhere:any)
  {
    switch (fromWhere)
    {
      case "addExp":
        this.showCrearExp=!this.showCrearExp;
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
          this.experienciaList=data[0].experiencia;
        }); 
        break;
      case "editExp":
        this.showEditExp=!this.showEditExp;
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
          this.experienciaList=data[0].experiencia;
        });
        break;
      case "delExp":
          this.showDelExp=!this.showDelExp;
          this.datosPorfolio.obtenerDatos().subscribe(data =>{
            this.experienciaList=data[0].experiencia;
          });
          break;
      case "addEdu":
        this.showCrear=!this.showCrear;
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
          this.educacionList=data[0].educacion;
        }); 
        break;
      case "editEdu":
          this.showedit=!this.showedit;
          this.datosPorfolio.obtenerDatos().subscribe(data =>{
            this.educacionList=data[0].educacion;
          }); 
          break;
      case "delEdu":
            this.showDelEdu=!this.showDelEdu;
            this.datosPorfolio.obtenerDatos().subscribe(data =>{
              this.educacionList=data[0].educacion;
            }); 
          break;      

    }
  }
}
