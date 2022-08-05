import { Component } from '@angular/core';
import Kitten from './kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  adoptedKittens: Kitten[] = [];

  kittens: Kitten[] = [];

  onReceiveKittens(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  onAddoptKitten(kitten: Kitten) {
    this.adoptedKittens.push(kitten);
    this.kittens.includes(kitten);
  }
}
