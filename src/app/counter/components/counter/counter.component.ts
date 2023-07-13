import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{counter}}</p>
  <button class="btn btn-primary ml-2" (click)="aumentaContador(+1)">+</button>
  <button class="btn btn-primary ml-2" (click)="aumentaContador(0)">Reset</button>
  <button class="btn btn-primary ml-2" (click)="aumentaContador(-1)">-</button>
  `
})

export class CounterComponent  {
  constructor() { }
  public counter :number = 0;

  aumentaContador (value:number): void{
    (value==0)?this.counter=value: this.counter += value;
  }
}
