import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url_api: string = environment.apiURL;

  constructor( private http: HttpClient ) { }

  index(limit: number, offset: string): Observable<any> {
    return this.http.get<any>(`${this.url_api}?limit=${limit}&offset=${offset}`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map(pokemon => {
          this.getPokemons(pokemon.url).subscribe(res => pokemon.status = res)
        })
      })
    )
  }

  public getPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(res => res))
  }

  view(id: number): Observable<any> {
    return this.http.get<any>(`${this.url_api}/${id}`);
  }
}
