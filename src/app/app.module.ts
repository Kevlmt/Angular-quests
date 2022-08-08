import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

@NgModule({
  declarations: [AppComponent, CocktailListComponentComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
