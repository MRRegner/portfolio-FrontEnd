import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  form!: FormGroup;
  @Input() id_persona: any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private educacionService:EducacionService,private ruta:Router)
   {
    this.form=this.formBuilder.group(
      {
        escuela:['',[Validators.required]],
        titulo:['',[Validators.required]],
        logo:['',[Validators.required]],
        finalizacion:['',[Validators.required]],
        persona_id:['',[Validators.required]],
      }
    );
   }

  ngOnInit(): void 
  {
    console.log("parametro input "+ this.id_persona)
    this.form.patchValue({
      persona_id: this.id_persona,
      
    });
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
    console.log(this.form.value)
    
    this.educacionService.Crear(this.form.value).subscribe()
      this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}

