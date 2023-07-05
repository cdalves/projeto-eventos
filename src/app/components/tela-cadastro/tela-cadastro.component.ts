import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  nome: string = '' ;
  email:string = '';
  senha: string= '';
  

  constructor() { }

  ngOnInit(): void {
  }

  getNome(): string{
    return this.nome;
  }
  getEmail(): string{
    return this.email;
  }
  getSenha(): string{
    return this.senha;
  }

 getDados(): void{
      console.log('email: ' + this.nome);
      console.log('email: ' + this.email);
      console.log('senha: ' + this.senha);
  }

}
