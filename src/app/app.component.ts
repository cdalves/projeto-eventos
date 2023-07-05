import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventosService } from './services/eventos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
 
  
  title = 'projeto-eventos';
  nomeBusca!: string;

  constructor(private eventoService: EventosService){}

  findName(): void{
    this.eventoService.setBusca(this.nomeBusca);
  }

}

