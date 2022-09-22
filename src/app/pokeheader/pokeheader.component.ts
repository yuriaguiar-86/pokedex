import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeheader',
  templateUrl: './pokeheader.component.html',
  styleUrls: ['./pokeheader.component.css']
})
export class PokeheaderComponent implements OnInit {
  pokemonLogo = '/assets/pokemon.png';
  cursor = '/assets/cursor.png';

  constructor() { }
  ngOnInit(): void { }
}
