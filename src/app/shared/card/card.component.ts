import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { character } from '../interface/poke.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  _limit :number = 12;
  _offset :number = 0;
  _page :number = 0;

  dataPokemon:any[] = [];
  arrPokemonFavorites: any = [];

  constructor(private PokemonService :PokemonService){
   this.getPage();
  }


  getPokemons(){

    this.arrPokemonFavorites = this.PokemonService.getFavoritesPokemon()



    this.PokemonService.getPokemons(this._limit,this._offset)
    .subscribe((res:any) => {
     res.results.forEach((response:any) => {

      this.PokemonService.getDataPokemons(response.name)
      .subscribe( uniqResponse => {

        uniqResponse.isFavorite = false;
        if(this.arrPokemonFavorites.find((pokeFavorite:any)=> pokeFavorite.id == uniqResponse.id)){
          uniqResponse.isFavorite = true
        }

        this.dataPokemon.push(uniqResponse)


      })
     })
    })
  }



  getPage(){
    this._offset = this._limit * this._page
    this._page ++

    this.getPokemons();
  }



  addFavorite(pokemon :character){
  let resultAgregarFav = this.PokemonService.addFavoriteService(pokemon)

  if(resultAgregarFav){
    pokemon.isFavorite = true
  } else{
    pokemon.isFavorite = false
  }


  }

}
