import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-delete-experiencia',
  templateUrl: './delete-experiencia.component.html',
  styleUrls: ['./delete-experiencia.component.css']
})
export class DeleteExperienciaComponent implements OnInit {
  form!: FormGroup;
  experiencia:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder, private experienciaService:ExperienciaService) {
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
      console.log(this.experiencia)
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

  onEnviar(event:Event)
  {
    this.experienciaService.Borrar(this.id).subscribe()
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }

}

