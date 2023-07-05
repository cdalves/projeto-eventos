import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Eventos } from 'src/app/Eventos';
import { CheckIdService } from 'src/app/services/check-id.service';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.component.html',
  styleUrls: ['./cad-evento.component.css']
})
export class CadEventoComponent implements OnInit {
  public form! :FormGroup;
    

  constructor(private eventoservice: EventosService, private formBuilder: FormBuilder, private iduserserve: CheckIdService) { }
  
  ngOnInit(): void {
    const idCreat = this.iduserserve.getcheckId();

    this.form = this.formBuilder.group({
      idUser: idCreat,
      name: [],
      descricao: [],
      data: null    
    })
  }  

  cadEvento(){
    if(this.form.valid){
      this.eventoservice.creat(this.form.value).subscribe();
      console.log(this.form.value)
      alert('evento criado com sucesso!')
      this.form.reset();
    }
  }

}
