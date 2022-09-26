import { PokemonService } from '../pokemon.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  search = '/assets/search.png';
  snorlax = '/assets/snorlax.png';
  pokeball = '/assets/pokeball.png';

  scanner: string;
  error: boolean = false;

  public pokemons: any;
  private pokemonsFilters: any;

  constructor( private service: PokemonService ) { }

  ngOnInit(): void {
    this.service.index()
      .subscribe(res => {
        this.pokemonsFilters = res.results;
        this.pokemons = this.pokemonsFilters;
      },
      errors => {
        this.error = true
      }
    );
  }

  public searchPokemon(value: string) {
    const filter = this.pokemonsFilters.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter;
  }
}
