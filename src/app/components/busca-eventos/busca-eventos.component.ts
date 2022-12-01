import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/Eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-busca-eventos',
  templateUrl: './busca-eventos.component.html',
  styleUrls: ['./busca-eventos.component.css']
})
export class BuscaEventosComponent implements OnInit {
public nomeBusca?: string = "fest";
eventoFind?: Eventos;

  constructor(private eventoService: EventosService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.eventoService.getName("teatro").subscribe();

    console.log(this.findByName());
  }

  findByName() {      
    
    }
  

}
