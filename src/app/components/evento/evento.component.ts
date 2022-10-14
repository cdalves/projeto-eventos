import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  imagem: string = "https://distrito.me/wp-content/uploads/2022/06/Eventos-de-inovacao-confira-o-calendario-para-2022.png"
  nome: string = 'Encontro tec'
  descricao: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Et id veritatis nihil, libero maxime eos atque ab, fugit  explicabo maiores nostrum. Architecto voluptates enim, praesentium voluptatem aliquam fugiat tenetur pariatur. '
  caminho: string = "https://www.google.com"


  constructor() { }

  ngOnInit(): void {
  }

}
