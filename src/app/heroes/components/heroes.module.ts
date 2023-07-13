import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListarComponent } from "./listar/listar.component";
@NgModule({
  declarations: [
    HeroComponent,
    ListarComponent
  ],
  exports:[
    HeroComponent,
    ListarComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
