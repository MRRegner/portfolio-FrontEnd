import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LogrosService } from 'src/app/servicios/logros.service';

@Component({
  selector: 'app-edit-logro',
  templateUrl: './edit-logro.component.html',
  styleUrls: ['./edit-logro.component.css']
})
export class EditLogroComponent implements OnInit {
  form!: FormGroup;
  logro:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();
  constructor(private formBuilder:FormBuilder,private datosPorfolio:PorfolioService, 
    private logrosService:LogrosService,private ruta:Router, private route: ActivatedRoute,)
    {
      this.form=this.formBuilder.group(
        {
          id:['',[Validators.required]],
          titulo:['',[Validators.required]],
          descripcion:['',[Validators.required]],
          imagen:['',[Validators.required]],
          url:['',[Validators.required]],
          persona_id:['',[Validators.required]],
        }
      );
    }
  

  ngOnInit(): void {
    this.logrosService.obtenerDatos(this.id).subscribe(data =>{
 
      this.logro=data;
      this.form.patchValue({
        id:this.id,
        titulo: this.logro.titulo,
        descripcion: this.logro.descripcion,
        imagen: this.logro.imagen,
        url: this.logro.url,
        persona_id: this.logro.persona_id
        
      });

    });
  }
  get Id()
  {
   return this.form.get('id');
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
    this.logrosService.Editar(this.form.value).subscribe();
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }

}
