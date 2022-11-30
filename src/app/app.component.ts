import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  title = 'projeto-eventos';
  showFind = 1;

  findName(): void{
    this.showFind = 1;
    window.location.reload();
  }

}

