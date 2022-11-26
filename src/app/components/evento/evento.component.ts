import { Component, OnInit } from '@angular/core';
import { Eventos } from "src/app/Eventos";

import { EventosService } from 'src/app/services/eventos.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']

 
  
})
export class EventoComponent implements OnInit {
  

  eventos: Eventos[] = [];

  evento: Eventos = {
    id: 'test',
    idUser: 'test',
    name:'test',
    descricao: 'test',
    data: 'test',
  };

  constructor(private eventoServive: EventosService ) { 
    this.getEventos();
  }

  ngOnInit(): void {
  }

  getEventos(): void {
    this.eventoServive.getAll().subscribe((eventos) => (this.eventos = eventos));
  }  

}
