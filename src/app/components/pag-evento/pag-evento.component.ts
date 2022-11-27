import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eventos } from 'src/app/Eventos';
import { EventosService } from 'src/app/services/eventos.service';


@Component({
  selector: 'app-pag-evento',
  templateUrl: './pag-evento.component.html',
  styleUrls: ['./pag-evento.component.css']
})
export class PagEventoComponent implements OnInit {
  eventoItem?: Eventos;

  constructor(private eventoService: EventosService, private route: ActivatedRoute) { 
    this.getEvento();
  }

  ngOnInit(): void {
  }

  getEvento(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.eventoService.getItem(id).subscribe((eventos) => (this.eventoItem = eventos));
  }

  removeEvento(id : number) {
    this.eventoService.remove(id).subscribe();
    window.open(document.referrer,'_self');
  }
}