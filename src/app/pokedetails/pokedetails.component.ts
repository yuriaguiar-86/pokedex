import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {

  seta_voltar = '/assets/seta_esquerda.png';
  pokeball = '/assets/pokeball.png';

  pokemon: any;
  id: any;

  constructor(private router: Router, private service: PokemonService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    let routerActive = this.active.snapshot;

    if(routerActive && routerActive.paramMap && routerActive.paramMap.get('id')) {
      this.id = routerActive.paramMap.get('id');
      let id = parseInt(this.id);

      this.service.view(id).subscribe(res => {
        console.log(res)
        this.pokemon = res
      },
      error => {

      });
    }
  }

  listPokemons() {
    this.router.navigate(['/pokemons']);
  }
}
