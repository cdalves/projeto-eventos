import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
    email:string ='';
    senha: string= '';


  constructor() { }

  ngOnInit(): void {
  }

  getEmail(): string{
    return this.email;
  }
  getSenha(): string{
    return this.senha;
  }

 getDados(): void{
      console.log('email: ' + this.email)
      console.log('senha: ' + this.senha)
  }

}
