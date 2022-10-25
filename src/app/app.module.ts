import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './components/evento/evento.component';
import { LayoutInicioComponent } from './components/layout-inicio/layout-inicio.component';
import { CaroselEvComponent } from './components/carosel-ev/carosel-ev.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    LayoutInicioComponent,
    CaroselEvComponent,
    TelaLoginComponent,
    TelaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
