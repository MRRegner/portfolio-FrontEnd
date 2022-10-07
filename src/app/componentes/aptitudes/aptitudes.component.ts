import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Router,ActivatedRoute} from '@angular/router';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  skillsList:any;
  name:any;
  showedit:boolean=false;
  showCrear:boolean=false;
  showDel:boolean=false;
  idToShow:any;
  idToDel:any;
  fromWhere:any;

  constructor(private datosPorfolio:PorfolioService,private aptitudesService:AptitudesService,private ruta:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
      this.skillsList=data[0].skills;
      
    });
  }

  editar(id:any){
    this.showedit=!this.showedit;
    this.idToShow=id;
  }
  
  crear(){
    this.showCrear=!this.showCrear;
  }
  borrar(id: any) {
    this.showDel=!this.showDel;  
    this.idToShow=id;
  }
///Despues de realizar edicion, creado o borrado muestra los datos actualizados.
reloadData(fromWhere:any)
{
  switch (fromWhere)
  {
    case "add":
      this.showCrear=!this.showCrear;
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        this.skillsList=data[0].skills;
      }); 
      break;
    case "edit":
      this.showedit=!this.showedit;
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        this.skillsList=data[0].skills;
      });
      break;
    case "delete":
        this.showDel=!this.showDel;
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
          this.skillsList=data[0].skills;
        });
        break;
  }
}
}
