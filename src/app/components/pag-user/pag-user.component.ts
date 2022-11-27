import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-user',
  templateUrl: './pag-user.component.html',
  styleUrls: ['./pag-user.component.css']
})
export class PagUserComponent implements OnInit {

  usuario = {
    nameUser: "Joao silva",
    IdUser: "1"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
