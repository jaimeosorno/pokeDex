import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { character } from '../interface/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit {

  favorites : character[] = [];



  private pokeApi:string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http :HttpClient) { }

  ngOnInit() {
    let favoritesLocalStorage = localStorage.getItem('favorites') ? localStorage.getItem('favorites') : '';
   this.favorites = favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : '';
  }

  getPokemons(limit:number ,offset:number):Observable<character>{
    return this.http.get<character>(`${this.pokeApi}/?limit=${limit}&offset=${offset}`)
  };

  getDataPokemons(name:string):Observable<character>{
    return this.http.get<character>(`${this.pokeApi}/${name}`)
  };

  getPokemonById(id:string):Observable<character>{
    return this.http.get<character>(`${this.pokeApi}/${id}`)
  }

  getPokemonBySpecies(id:string):Observable<character>{
    return this.http.get<character>(`${this.pokeApi}-species/${id}`)
  }


  addFavoriteService(elem : character){
    this.favorites = JSON.parse(localStorage.getItem('favorites')!) || [];

    if(!this.favorites.find(poke => poke.id == elem.id)){
      this.favorites.push(elem)
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      return true
    }else{
        this.favorites = this.favorites.filter(poke => poke.id != elem.id)
        localStorage.setItem( 'favorites' ,JSON.stringify(this.favorites))

      return false
    }
  }

  getFavoritesPokemon(){
    const favorites = JSON.parse(localStorage.getItem('favorites')!) || [];
    return favorites;
  }

}
