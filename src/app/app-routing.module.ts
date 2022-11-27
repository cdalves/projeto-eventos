import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInicioComponent } from './components/layout-inicio/layout-inicio.component';
import { PagEventoComponent } from './components/pag-evento/pag-evento.component';
import { PagUserComponent } from './components/pag-user/pag-user.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';

const routes: Routes = [
  {path:'', component: LayoutInicioComponent},
  {path: 'login', component: TelaLoginComponent},
  {path:'cadastro', component: TelaCadastroComponent},
  {path:'eventos/:id', component: PagEventoComponent},
  {path:'usuario/eventos/:id', component: PagEventoComponent},
  {path:'usuario', component: PagUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
