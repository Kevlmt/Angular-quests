import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss'],
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendDataToParent() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
