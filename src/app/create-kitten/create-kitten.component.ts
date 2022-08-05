import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Kitten from '../kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss'],
})
export class CreateKittenComponent implements OnInit {
  kittenForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthDate: ['', Validators.required],
    img: ['', Validators.required],
  });

  @Output() submitKitten: EventEmitter<Kitten> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.kittenForm.valid) {
      this.submitKitten.emit(this.kittenForm.value);
    }
  }
}
