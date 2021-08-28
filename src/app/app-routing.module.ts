import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ListarUnoComponent } from './listar-uno/listar-uno.component';

const routes: Routes = [

  {path: 'home', component: PrincipalComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'actualizar/:id', component: ActualizarComponent},
  {path: 'mostraruno/:id', component: ListarUnoComponent},
  {path: '**', redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
