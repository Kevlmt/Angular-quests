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
  public getCocktail: CocktailService;

  constructor(getCocktail: CocktailService) {
    this.getCocktail = getCocktail;
  }

  ngOnInit(): void {
    this.getCocktail
      .getCocktail()
      .subscribe((data: Array<Cocktail>) => (this.cocktails = data));
  }
}
