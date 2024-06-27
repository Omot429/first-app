import { Component } from '@angular/core';
import { students } from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first angular app';
  description = 'this app is just to test my knowlege';
  author = 'Akilo Rohimat';
  students: students = {
    id: 1,
    name: 'Rohimat',
    age: 30,
  };
}
