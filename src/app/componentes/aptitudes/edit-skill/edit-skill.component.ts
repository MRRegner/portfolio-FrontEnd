import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  form!: FormGroup;
  aptitud:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private datosPorfolio:PorfolioService, 
    private aptitudesService:AptitudesService,private ruta:Router, private route: ActivatedRoute,) {

      this.form=this.formBuilder.group(
        {
          id:['',[Validators.required]],
          tecnologia:['',[Validators.required]],
          nivel:['',[Validators.required]],
          persona_id:['',[Validators.required]],
        }
      );
     }

  ngOnInit(): void {

    this.aptitudesService.obtenerDatos(this.id).subscribe(data =>{
 
      this.aptitud=data;
      this.form.patchValue({
        id:this.id,
        tecnologia: this.aptitud.tecnologia,
        nivel: this.aptitud.nivel,
        persona_id: this.aptitud.persona_id,
        
      });

    });
  }
  get Id()
  {
   return this.form.get('id');
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
    this.aptitudesService.Editar(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;

  }

  finalizar()
  {
    this.enviarEmitter.emit();
  }

}
