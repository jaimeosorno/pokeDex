import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    TopBarComponent,
    HomeComponent,
    FavoritesComponent,
    DetailComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TopBarComponent,
    HomeComponent,
    FavoritesComponent,
    DetailComponent,
    CardComponent
  ]
})
export class SharedModule { }
