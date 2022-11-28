import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Eventos } from 'src/app/Eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.component.html',
  styleUrls: ['./cad-evento.component.css']
})
export class CadEventoComponent implements OnInit {
  public form! :FormGroup;
    

  constructor(private eventoservice: EventosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idUser: 1,
      name: [],
      descricao: [],
      data: "00"    
    })
  }  

  cadEvento(){
    if(this.form.valid){
      this.eventoservice.creat(this.form.value).subscribe();
      console.log(this.form.value);
    }
  }

}
