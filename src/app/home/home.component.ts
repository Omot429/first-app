import { Component } from '@angular/core';
import { students } from '../students';
import { STUDENTS } from '../student-lists';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  students = STUDENTS;
  student: students = {
    id: 1,
    name: 'Rohimat',
    age: 30,
  };
  selectedHero?: students;
  onSelect(hero: students): void {
    this.selectedHero = hero;
  }
  showname(age: number) {
    alert(age);
  }
}
