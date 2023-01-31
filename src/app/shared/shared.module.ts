import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent,
    HomeComponent,
    FavoritesComponent,
    DetailComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    TopBarComponent,
    HomeComponent,
    FavoritesComponent,
    DetailComponent,
    CardComponent,
    FormComponent
  ]
})
export class SharedModule { }
