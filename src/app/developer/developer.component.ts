import { Component, OnInit } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  developer!: Developer;
  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer(
      'kevin',
      'lamant',
      25,
      'homme',
      'dev junior en stage angular',
      [
        new Skill('angular', 'angular logo', 'angular site'),
        new Skill('react', 'react logo', 'react site'),
        new Skill('sass', 'sass logo', 'sass site'),
      ]
    );
  }
}
