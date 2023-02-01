import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { character } from '../interface/poke.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites:character [] = [];

  constructor(private PokemonService:PokemonService){}

  ngOnInit() {
    this.getPokemonsFavorites();
  }

  getPokemonsFavorites(){
   this.favorites = this.PokemonService.getFavoritesPokemon()

  }

}
