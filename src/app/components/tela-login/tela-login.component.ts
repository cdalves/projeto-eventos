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

  
 getDados(): void{
    console.log(this.email + this.senha)
    
  }

}
