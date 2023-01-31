import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './shared/detail/detail.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  {path : 'home' , component  : HomeComponent},
  {path : 'favorites' , component : FavoritesComponent},
  {path : 'detail/:id' , component :DetailComponent},
  {path : '' ,pathMatch:'full', redirectTo : 'home'},
  {path : '**',pathMatch:'full' , redirectTo : 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
