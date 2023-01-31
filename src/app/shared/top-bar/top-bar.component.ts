import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { character } from '../interface/poke.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: ['.row { background-color: white; }']

})
export class TopBarComponent implements OnInit {

  pokemonsFavorites: character [] = [] ;

  constructor(private PokemonService:PokemonService){}

  ngOnInit() {
    this.getPokemonFav()
  }

  getPokemonFav(){
   this.pokemonsFavorites = this.PokemonService.getFavoritesPokemon()
  }
}
