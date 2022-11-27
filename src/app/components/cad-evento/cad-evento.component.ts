import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/Eventos';

@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.component.html',
  styleUrls: ['./cad-evento.component.css']
})
export class CadEventoComponent implements OnInit {
  name: string = '' ;
  descricao:string = '';



  constructor() { }

  ngOnInit(): void {
  }

  getDados(): void{
    console.log(this.name, this.descricao)
  }
}
