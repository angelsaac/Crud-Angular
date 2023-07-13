import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk','She Hulk', 'Thor'];
  public deleteHero?:string;

  deleteHeroeLast():void{
    this.deleteHero = this.heroNames.pop();
  }
}
