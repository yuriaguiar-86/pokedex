import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokenotComponent } from './pokenot/pokenot.component';

const routes: Routes = [
  { path: '', component: PokelistComponent },
  { path: 'pokemons', component: PokelistComponent },
  { path: 'pokemons/:id', component: PokedetailsComponent },
  { path: '**', component: PokenotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
