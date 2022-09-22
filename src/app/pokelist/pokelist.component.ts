import { PokemonService } from '../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  search = '/assets/search.png';
  snorlax = '/assets/snorlax.png';
  pokeball = '/assets/pokeball.png';

  pokemons: any;
  error: boolean = false;

  constructor( private service: PokemonService ) { }

  ngOnInit(): void {
    this.service.index()
      .subscribe(res => {
        console.log(res.results)
        this.pokemons = res.results
      },
      errors => {
        this.error = true
      }
    );
  }
}
