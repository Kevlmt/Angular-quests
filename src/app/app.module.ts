import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HandleShowMovieDirective } from './handle-show-movie.directive';
import { HandleChangeStyleDirective } from './handle-change-style.directive';

@NgModule({
  declarations: [AppComponent, ListMoviesComponent, HandleShowMovieDirective, HandleChangeStyleDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
