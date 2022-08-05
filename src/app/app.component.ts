import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onomatopias: string = '';

  onReceiveNewOnomatopeia($event: string) {
    this.onomatopias = $event;
  }
}
