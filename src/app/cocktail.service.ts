import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails: Cocktail[] = [
    {
      name: 'mojito',
      price: 6,
      img: 'img mojito',
    },
    {
      name: 'pina colada',
      price: 7,
      img: 'img pina colada',
    },
  ];

  getCocktail(): Cocktail[] {
    return this.cocktails;
  }
}
