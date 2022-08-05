import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Kitten from '../kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss'],
})
export class ListKittenComponent implements OnInit {
  @Input() kittens: Kitten[] = [];

  @Output() addAdoptKitten: EventEmitter<Kitten> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addoptKitten(kitten: Kitten) {
    this.addAdoptKitten.emit(kitten);
  }
}
