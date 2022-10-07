import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPorfolio:any;
  showedit:boolean=false;
  fromWhere:any;
  constructor(private datosPorfolio:PorfolioService) { }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
      this.miPorfolio=data[0];
    });
}

editar(){
  this.showedit=!this.showedit;
}
///Despues de realizar edicion muestra los datos actualizados.
reloadData()
{
      this.showedit=!this.showedit;
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
        this.miPorfolio=data[0];
      });
  }
}
