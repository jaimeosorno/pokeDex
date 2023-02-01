import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { switchMap } from 'rxjs';
import { character } from '../interface/poke.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  pokemon!: character ;
  detail:any;

  constructor(private PokemonService:PokemonService,
              private activateRoute :ActivatedRoute
             ){}


  ngOnInit(){

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.PokemonService.getPokemonById(id))
    ).subscribe(response => {
      this.pokemon = response
    })

    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.PokemonService.getPokemonBySpecies(id))
    )
    .subscribe(res => {
      this.detail = res
    })

  }

  addFavorites(){
    this.PokemonService.addFavoriteService(this.pokemon)
  }


}
