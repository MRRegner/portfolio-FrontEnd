import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {
  form!: FormGroup;
  aptitud:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();
  constructor(private formBuilder:FormBuilder, private aptitudesService:AptitudesService) 
  {
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
      console.log(this.aptitud)
      this.form.patchValue({
        id:this.id,
        tecnologia: this.aptitud.tecnologia,
        nivel: this.aptitud.nivel,
        persona_id: this.aptitud.persona_id,
        
      });

    });
  }
  onEnviar(event:Event)
  {
    this.aptitudesService.Borrar(this.id).subscribe()
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }


}
