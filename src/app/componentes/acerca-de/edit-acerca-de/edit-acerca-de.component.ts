import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AcercadeService } from 'src/app/servicios/acercade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  miPorfolio:any;
  form!: FormGroup;
  showFinalizacion:boolean=false;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private datosPorfolio:PorfolioService, 
    private acercadeService:AcercadeService,private ruta:Router) 
    { 
      this.form=this.formBuilder.group(
        {
          id:['',[Validators.required]],
          nombre:['',[Validators.required]],
          apellido:['',[Validators.required]],
          email:['',[Validators.required]],
          descripcion:['',[Validators.required]],
          titulo:['',[Validators.required]],
          backimage:['',[Validators.required]],
          personimage:['',[Validators.required]],
          ubicacion:['',[Validators.required]],
        }
      );


  }

  

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
 
      this.miPorfolio=data;

      this.form.patchValue({
        id: this.miPorfolio[0].id,
        nombre: this.miPorfolio[0].nombre,
        apellido: this.miPorfolio[0].apellido,
        email: this.miPorfolio[0].email,
        descripcion: this.miPorfolio[0].descripcion,
        titulo: this.miPorfolio[0].titulo,
        backimage: this.miPorfolio[0].backimage,
        personimage: this.miPorfolio[0].personimage,
        ubicacion: this.miPorfolio[0].ubicacion,   
      });

    });
  }
  get Id()
  {
    return this.form.get('id');
  }
  get Nombre()
  {
   return this.form.get('nombre');
  }
  get Apellido()
  {
   return this.form.get('apellido');
  }
  get Email()
  {
   return this.form.get('email');
  }
  get Descripcion()
  {
   return this.form.get('descripcion');
  }
  get Titulo()
  {
   return this.form.get('titulo');
  }
  get Backimage()
  {
   return this.form.get('backimage');
  }
  get Personimage()
  {
   return this.form.get('personimage');
  }
  get Ubicacion()
  {
   return this.form.get('ubicacion');
  }
  onEnviar(event:Event)
  {
    this.acercadeService.Editar(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;   
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }


}
