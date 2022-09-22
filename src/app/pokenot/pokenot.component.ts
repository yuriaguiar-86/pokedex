import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokenot',
  templateUrl: './pokenot.component.html',
  styleUrls: ['./pokenot.component.css']
})
export class PokenotComponent implements OnInit {

  snorlax = '/assets/snorlax.png';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  listPokemons() {
    this.router.navigate(['/pokemons']);
  }
}
