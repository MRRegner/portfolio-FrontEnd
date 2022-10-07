import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  form!: FormGroup;
  @Input() id_persona: any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private experienciaService:ExperienciaService,private ruta:Router) 
  {
    this.form=this.formBuilder.group(
      {
        empresa:['',[Validators.required]],
        puesto:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        periodo:['',[Validators.required]],
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
    
    this.experienciaService.Crear(this.form.value).subscribe()
      this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}
