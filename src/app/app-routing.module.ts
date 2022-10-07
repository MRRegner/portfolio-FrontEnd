import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {IniciarSesionComponent} from './componentes/iniciar-sesion/iniciar-sesion.component';
import {PortfolioComponent} from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];
const routerOptions: ExtraOptions = {
  //Para permitir el scroll href="#id"
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
 
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
