import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent {
  model: User = new User();

  constructor() {}

  onSubmit() {
    console.log(this.model);
  }
}
