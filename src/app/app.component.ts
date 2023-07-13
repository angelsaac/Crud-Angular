import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'bases';
  public counter :number = 0;

  aumentaContador (value:number): void{
    (value==0)?this.counter=value: this.counter += value;
  }
}
