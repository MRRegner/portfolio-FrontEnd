import { Component, OnInit ,Input,Output,EventEmitter  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})

export class AddSkillComponent implements OnInit {
  
  form!: FormGroup;
  @Input() id_persona: any;
  showFinalizacion:boolean=false;
  @Output()
  enviarEmitter= new EventEmitter();
  constructor(private formBuilder:FormBuilder,private aptitudesService:AptitudesService,private ruta:Router) 
  { 
    this.form=this.formBuilder.group(
      {
        tecnologia:['',[Validators.required]],
        nivel:['',[Validators.required]],
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

  get Tecnologia()
  {
   return this.form.get('tecnologia');
  }
  get Nivel()
  {
    return this.form.get('nivel');
  }

  get Persona_id()
  {
   return this.form.get('persona_id');
  }

  onEnviar(event:Event)
  {
    this.aptitudesService.Crear(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}
