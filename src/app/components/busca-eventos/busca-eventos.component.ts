import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-eventos',
  templateUrl: './busca-eventos.component.html',
  styleUrls: ['./busca-eventos.component.css']
})
export class BuscaEventosComponent implements OnInit {
public nomeBusca?: string = "fest";

  constructor() { }

  ngOnInit(): void {
  }

}
