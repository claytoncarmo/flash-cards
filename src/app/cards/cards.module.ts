import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardsPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
