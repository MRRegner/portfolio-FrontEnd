import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  form!: FormGroup;
  educacion:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private datosPorfolio:PorfolioService, 
    private educacionService:EducacionService,private ruta:Router, private route: ActivatedRoute,) {
      
      this.form=this.formBuilder.group(
        {
          id:['',[Validators.required]],
          escuela:['',[Validators.required]],
          titulo:['',[Validators.required]],
          logo:['',[Validators.required]],
          finalizacion:['',[Validators.required]],
          persona_id:['',[Validators.required]],
        }
      );

    }

  ngOnInit(): void {
    
    this.educacionService.obtenerDatos(this.id).subscribe(data =>{
 
      this.educacion=data;
      //console.log(this.educacion)
      this.form.patchValue({
        id:this.id,
        escuela: this.educacion.escuela,
        titulo: this.educacion.titulo,
        logo: this.educacion.logo,
        finalizacion: this.educacion.finalizacion,
        persona_id: this.educacion.persona_id,
        
      });

    });
  }
  get Id()
  {
   return this.form.get('id');
  }
  get Escuela()
  {
   return this.form.get('escuela');
  }
  get Titulo()
  {
   return this.form.get('titulo');
  }
  get Logo()
  {
    return this.form.get('logo');
  }
  get Finalizacion()
  {
   return this.form.get('finalizacion');
  }
  get Persona_id()
  {
   return this.form.get('persona_id');
  }

  onEnviar(event:Event)
  {
    this.educacionService.Editar(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}
