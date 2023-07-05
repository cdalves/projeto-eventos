import { Component, OnInit } from '@angular/core';
import { Eventos } from "src/app/Eventos";

import { EventosService } from 'src/app/services/eventos.service';



@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit { 

  eventos: Eventos[] = [];

  constructor(private eventoServive: EventosService ) { 
    this.getEventos();
  }

  ngOnInit(): void {
  }

  getEventos(): void {
    this.eventoServive.getAll().subscribe((eventos) => (this.eventos = eventos));
  }  


}
