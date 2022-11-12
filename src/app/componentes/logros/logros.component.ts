import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:any;
  showedit:boolean=false;
  showCrear:boolean=false;
  showDel:boolean=false;
  idToShow:any;
  idToDel:any;
  fromWhere:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
      this.logrosList=data[0].proyecto;
      
    });
  }

  crear(){
    this.showCrear=!this.showCrear;
  }
  
  editar(id:any){
    this.showedit=!this.showedit;
    this.idToShow=id;
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
        this.logrosList=data[0].proyecto;
      }); 
      break;
    case "edit":
      this.showedit=!this.showedit;
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        this.logrosList=data[0].proyecto;
      });
      break;
    case "delete":
        this.showDel=!this.showDel;
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
          this.logrosList=data[0].proyecto;
        });
        break;
  }
}
}

