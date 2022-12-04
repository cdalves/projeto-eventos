import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaEventosComponent } from './components/busca-eventos/busca-eventos.component';
import { CadEventoComponent } from './components/cad-evento/cad-evento.component';
import { EventoComponent } from './components/evento/evento.component';
import { PagEventoComponent } from './components/pag-evento/pag-evento.component';
import { PagUserComponent } from './components/pag-user/pag-user.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';

const routes: Routes = [
  {path:'', component: EventoComponent},
  {path: 'login', component: TelaLoginComponent},
  {path:'cadastro', component: TelaCadastroComponent},
  {path:'eventos/:id', component: PagEventoComponent},
  {path:'usuario/eventos/:id', component: PagEventoComponent},
  {path:'usuario', component: PagUserComponent},
  {path:'usuario/cadEvento', component: CadEventoComponent},
  {path:'busca', component: BuscaEventosComponent},
  {path:'busca/eventos/:id', component: PagEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
