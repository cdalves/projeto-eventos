import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './components/evento/evento.component';
import { LayoutInicioComponent } from './components/layout-inicio/layout-inicio.component';
import { CaroselEvComponent } from './components/carosel-ev/carosel-ev.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { PagEventoComponent } from './components/pag-evento/pag-evento.component';
import { PagUserComponent } from './components/pag-user/pag-user.component';
import { CadEventoComponent } from './components/cad-evento/cad-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    LayoutInicioComponent,
    CaroselEvComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    PagEventoComponent,
    PagUserComponent,
    CadEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
