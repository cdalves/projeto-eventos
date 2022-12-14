import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { EventoComponent } from './components/evento/evento.component';
import { LayoutInicioComponent } from './components/layout-inicio/layout-inicio.component';
import { CaroselEvComponent } from './components/carosel-ev/carosel-ev.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    EventoComponent,
    LayoutInicioComponent,
    CaroselEvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
