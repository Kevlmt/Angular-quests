import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'CocktailListComponent',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss'],
})
export class CocktailListComponentComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public getCocktails: CocktailService;

  constructor(getCocktail: CocktailService) {
    this.getCocktails = getCocktail;
  }

  ngOnInit(): void {
    this.getCocktails
      .getCocktailsList()
      .subscribe((data: Cocktail[]) => (this.cocktails = data));
  }
}
