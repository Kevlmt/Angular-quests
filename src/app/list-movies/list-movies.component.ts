import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  showMovie: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleShowMovie() {
    this.showMovie = !this.showMovie;
  }
}
