import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/Eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-busca-eventos',
  templateUrl: './busca-eventos.component.html',
  styleUrls: ['./busca-eventos.component.css']
})
export class BuscaEventosComponent implements OnInit {
public nomeBusca?: string;
eventosbusca: Eventos[] = [];

  constructor(private eventoService: EventosService, private route: ActivatedRoute) { 
    this.nomeBusca = eventoService.nomeFind;
    
  }

  ngOnInit(): void {
    console.log(this.nomeBusca);
    this.eventoService.atualizarbusca.subscribe(
      x => this.findEvento()
      );
  }

  findEvento():void{
     this.eventoService.findByName().subscribe((eventos) => (this.eventosbusca = eventos));
  }


}
