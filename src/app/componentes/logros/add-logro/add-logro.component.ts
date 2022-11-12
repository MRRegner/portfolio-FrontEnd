import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LogrosService } from 'src/app/servicios/logros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-logro',
  templateUrl: './add-logro.component.html',
  styleUrls: ['./add-logro.component.css']
})
export class AddLogroComponent implements OnInit {

  form!: FormGroup;
  @Input() id_persona: any;
  showFinalizacion:boolean=false;
  @Output()
  enviarEmitter= new EventEmitter();

  constructor(private formBuilder:FormBuilder,private logrosService:LogrosService, private ruta:Router)
  {
    this.form=this.formBuilder.group(
      {
        titulo:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        imagen:['',[Validators.required]],
        url:['',[Validators.required]],
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
  get Titulo()
  {
   return this.form.get('titulo');
  }
  get Descripcion()
  {
    return this.form.get('descripcion');
  }
  get Imagen()
  {
    return this.form.get('imagen');
  }
  get Url()
  {
    return this.form.get('url');
  }
  get Persona_id()
  {
   return this.form.get('persona_id');
  }

  onEnviar(event:Event)
  {
    this.logrosService.Crear(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }
}
