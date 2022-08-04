import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import rangeDateValidator from './rangeDateValidator';
import isRequiredValidator from './isRequiredValidator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  types = [
    {
      name: 'Film',
      value: 'film',
    },
    {
      name: 'Serie',
      value: 'serie',
    },
    {
      name: 'Episode',
      value: 'episode',
    },
  ];

  fiches = [
    {
      name: 'Complète',
      value: 'complète',
    },
    {
      name: 'Courte',
      value: 'courte',
    },
  ];

  movieForm = this.fb.group({
    identifiers: this.fb.group({
      id: [''],
      title: [''],
    }),
    type: ['', Validators.required],
    releasedDate: ['', [Validators.required, rangeDateValidator(1900)]],
    fiche: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm.controls['identifiers'].setValidators(
      isRequiredValidator('title', 'id')
    );

    this.movieForm.patchValue({ type: 'serie' });
    this.movieForm.patchValue({ fiche: 'courte' });
    this.movieForm.valueChanges.subscribe();
  }

  handleSubmit() {
    console.log('SUBMITTED !', this.movieForm.value);
  }
}
