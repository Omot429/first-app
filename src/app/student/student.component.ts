import { Component } from '@angular/core';
import { students } from '../students';
import { STUDENTS } from '../student-lists';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students = STUDENTS;
  student: students = {
    id: 1,
    name: 'Rohimat',
    age: 30,
  };
}
