import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { EventoComponent } from './components/evento/evento.component';
import { LayoutInicioComponent } from './components/layout-inicio/layout-inicio.component';
import { CaroselEvComponent } from './components/carosel-ev/carosel-ev.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    EventoComponent,
    LayoutInicioComponent,
    CaroselEvComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
