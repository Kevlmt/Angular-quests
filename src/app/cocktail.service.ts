import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl: string = 'assets/cocktail.json';

  constructor(private httpClient: HttpClient) {}

  getCocktailsList(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>(`${this.baseUrl}`);
  }
}
