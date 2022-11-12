import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LogrosService } from 'src/app/servicios/logros.service';

@Component({
  selector: 'app-delete-logro',
  templateUrl: './delete-logro.component.html',
  styleUrls: ['./delete-logro.component.css']
})
export class DeleteLogroComponent implements OnInit {
  form!: FormGroup;
  logro:any;
  showFinalizacion:boolean=false;
  @Input() id: any;
  @Output()
  enviarEmitter= new EventEmitter();
  constructor(private formBuilder:FormBuilder, private logrosService:LogrosService) 
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
  onEnviar(event:Event)
  {
    this.logrosService.Borrar(this.id).subscribe()
    this.showFinalizacion=!this.showFinalizacion;
  }
  finalizar()
  {
    this.enviarEmitter.emit();
  }

}
