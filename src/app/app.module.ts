import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeheaderComponent } from './pokeheader/pokeheader.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokenotComponent } from './pokenot/pokenot.component';
import { PokefooterComponent } from './pokefooter/pokefooter.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PokeheaderComponent,
    PokelistComponent,
    PokedetailsComponent,
    PokenotComponent,
    PokefooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
