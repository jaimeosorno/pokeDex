import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  search :string = "";

  constructor(private PokemonService:PokemonService,
              private route :Router){}

  ngOnInit() {
  }

  SearchPokemon(){
    this.search = this.search.trim().toLowerCase()

    this.PokemonService.getDataPokemons(this.search)
    .subscribe(resp => {
      this.route.navigate([`/detail/${resp.name && resp.id}`])
    })
  }

}
