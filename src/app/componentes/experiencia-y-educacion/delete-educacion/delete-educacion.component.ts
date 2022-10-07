import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-delete-educacion',
  templateUrl: './delete-educacion.component.html',
  styleUrls: ['./delete-educacion.component.css']
})
export class DeleteEducacionComponent implements OnInit {
  form!: FormGroup;
  educacion:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder, private educacionService:EducacionService) {
    this.form=this.formBuilder.group(
      {
        id:['',[Validators.required]],
        escuela:['',[Validators.required]],
        titulo:['',[Validators.required]],
        finalizacion:['',[Validators.required]],
      }
    );
   }

  ngOnInit(): void {
        
    this.educacionService.obtenerDatos(this.id).subscribe(data =>{
 
      this.educacion=data;
      console.log(this.educacion)
      this.form.patchValue({
        id:this.id,
        escuela: this.educacion.escuela,
        titulo: this.educacion.titulo,
        finalizacion: this.educacion.finalizacion,
        persona_id: this.educacion.persona_id,
        
      });

    });
  }

  onEnviar(event:Event)
  {
    this.educacionService.Borrar(this.id).subscribe()
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }

}
