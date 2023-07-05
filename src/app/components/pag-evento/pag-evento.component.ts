import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Eventos } from 'src/app/Eventos';
import { CheckIdService } from 'src/app/services/check-id.service';
import { EventosService } from 'src/app/services/eventos.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-pag-evento',
  templateUrl: './pag-evento.component.html',
  styleUrls: ['./pag-evento.component.css']
})
export class PagEventoComponent implements OnInit {
  eventoItem?: Eventos;
  checkId: number = 0;
  public form!: FormGroup;

  constructor(private eventoService: EventosService, private route: ActivatedRoute, private checkIdservece: CheckIdService, private formBuilder: FormBuilder) { 
    this.getEvento();

  }

  ngOnInit(): void {
    this.checkId = this.checkIdservece.getcheckId();  

    console.log(this.eventoItem?.id)
    this.form = this.formBuilder.group({
      id: this.getId(),
      idUser: this.checkId,
      name: [],
      descricao: []
    })
  }  

  getId(): Number {
    return Number(this.route.snapshot.paramMap.get("id"));
  }

  getEvento(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.eventoService.getItem(id).subscribe((eventos) => (this.eventoItem = eventos));
  }

  removeEvento(id : number) {
    this.eventoService.remove(id).subscribe();
    window.location.href = "http://localhost:4200/usuario";    
  }  


  editEvento(){    
    this.eventoService.edit(this.form.value).subscribe();
    alert("Evento editado com sucesso");

  }

}