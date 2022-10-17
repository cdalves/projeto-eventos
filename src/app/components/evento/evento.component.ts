import { Component, OnInit } from '@angular/core';
import { Eventos } from "src/app/Eventos";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']

 
  
})
export class EventoComponent implements OnInit {

  eventosRecentes: Eventos[] = [
  {
    imagem: 'https://distrito.me/wp-content/uploads/2022/06/Eventos-de-inovacao-confira-o-calendario-para-2022.png',
    nome:'Encontro tec' ,
    descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Et id veritatis nihil, libero maxime eos atque ab, fugit  explicabo maiores nostrum. Architecto voluptates enim, praesentium voluptatem aliquam fugiat tenetur pariatur. ',
    caminho:'https://www.google.com',
  },
  {
    imagem: "https://distrito.me/wp-content/uploads/2022/06/Eventos-de-inovacao-confira-o-calendario-para-2022.png",
    nome:'Festival',
    descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Et id veritatis nihil, libero maxime eos atque ab, fugit  explicabo maiores nostrum. Architecto voluptates enim, praesentium voluptatem aliquam fugiat tenetur pariatur. ',
    caminho:"https://www.google.com",
  },
  {
    imagem: "https://distrito.me/wp-content/uploads/2022/06/Eventos-de-inovacao-confira-o-calendario-para-2022.png",
    nome:'calourada',
    descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Et id veritatis nihil, libero maxime eos atque ab, fugit  explicabo maiores nostrum. Architecto voluptates enim, praesentium voluptatem aliquam fugiat tenetur pariatur. ',
    caminho:"https://www.google.com",
  },
  ];

  evento: Eventos = {
    imagem: 'test',
    nome:'test',
    descricao: 'test',
    caminho: 'test',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
