import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';



@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  form!: FormGroup;
  experiencia:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();


  constructor(private formBuilder:FormBuilder,private datosPorfolio:PorfolioService, 
    private experienciaService:ExperienciaService,private ruta:Router, private route: ActivatedRoute,) { 
      
      this.form=this.formBuilder.group(
        {
          id:['',[Validators.required]],
          empresa:['',[Validators.required]],
          puesto:['',[Validators.required]],
          descripcion:['',[Validators.required]],
          periodo:['',[Validators.required]],
          persona_id:['',[Validators.required]],
        }
      );


    }

  ngOnInit(): void {

    this.experienciaService.obtenerDatos(this.id).subscribe(data =>{
 
      this.experiencia=data;
      //console.log(this.experiencia)
      this.form.patchValue({
        id:this.id,
        empresa: this.experiencia.empresa,
        puesto: this.experiencia.puesto,
        descripcion: this.experiencia.descripcion,
        periodo: this.experiencia.periodo,
        persona_id: this.experiencia.persona_id,
        
      });

    });
  }
  get Id()
  {
   return this.form.get('id');
  }
  get Empresa()
  {
   return this.form.get('empresa');
  }
  get Puesto()
  {
   return this.form.get('puesto');
  }
  get Descripcion()
  {
   return this.form.get('descripcion');
  }
  get Periodo()
  {
   return this.form.get('periodo');
  }
  get Persona_id()
  {
   return this.form.get('persona_id');
  }
  onEnviar(event:Event)
  {
    //console.log(this.form.value)
    this.experienciaService.Editar(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}
