import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './components/evento/evento.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { PagEventoComponent } from './components/pag-evento/pag-evento.component';
import { PagUserComponent } from './components/pag-user/pag-user.component';
import { CadEventoComponent } from './components/cad-evento/cad-evento.component';
import { BuscaEventosComponent } from './components/busca-eventos/busca-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    PagEventoComponent,
    PagUserComponent,
    CadEventoComponent,
    BuscaEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
