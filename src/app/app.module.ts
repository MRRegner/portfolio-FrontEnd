import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { AcercadeService } from './servicios/acercade.service';
import { EditEducacionComponent } from './componentes/experiencia-y-educacion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia-y-educacion/edit-experiencia/edit-experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillComponent } from './componentes/aptitudes/edit-skill/edit-skill.component';
import { AddSkillComponent } from './componentes/aptitudes/add-skill/add-skill.component';
import { AddEducacionComponent } from './componentes/experiencia-y-educacion/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './componentes/experiencia-y-educacion/add-experiencia/add-experiencia.component';
import { DeleteExperienciaComponent } from './componentes/experiencia-y-educacion/delete-experiencia/delete-experiencia.component';
import { DeleteEducacionComponent } from './componentes/experiencia-y-educacion/delete-educacion/delete-educacion.component';
import { DeleteSkillComponent } from './componentes/aptitudes/delete-skill/delete-skill.component';

  
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EditAcercaDeComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    AddSkillComponent,
    AddEducacionComponent,
    AddExperienciaComponent,
    DeleteExperienciaComponent,
    DeleteEducacionComponent,
    DeleteSkillComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
     
    })
  ],
  providers: [PorfolioService,AcercadeService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
