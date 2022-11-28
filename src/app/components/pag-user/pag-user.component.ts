import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckIdService } from 'src/app/services/check-id.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-pag-user',
  templateUrl: './pag-user.component.html',
  styleUrls: ['./pag-user.component.css']
})
export class PagUserComponent implements OnInit {

  usuario: Usuario = {
    name: "Joao silva",
    idUser: 1,
    email: "joao@email.com",
    senha: "joao123"
  };
  
  private id = this.usuario.idUser;

  constructor(private checkidservice: CheckIdService ) { }

  ngOnInit(): void {

  }
  retId(){
    this.checkidservice.setChechId(this.usuario.idUser);
  }
}
