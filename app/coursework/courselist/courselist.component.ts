import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  /*Keep the course providers lowercased! IMPORTANT!*/

  courses: Course[] = [
    new Course('Data Structures and Algorithms', 'csulb', '',
    'A broad view of data structures and the structure-preserving operations on them. Abstract data types, algorithms, complexity. Programming projects to exemplify these concepts.',[]),
    new Course('Machine Learning', 'udacity', 'https://www.udacity.com/course/machine-learning--ud262', 'Introductory course on Machine Learning taught by instructors from George Tech.',[]),
    new Course('Angular 4 - The Complete Guide', 'udemy', 'https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview', 'Comprehensive course on Angular 4.',[]),
    new Course('Spring & Hibernate', 'udemy', 'https://www.udemy.com/spring-hibernate-tutorial/learn/v4/overview', 'Learned the fundamentals of Spring & Hibernate.', [{projectName: 'CRM', projectLink: 'https://github.com/rdeavila94/CRM'}]),
      new Course('Technical Communication', 'csulb', 'http://csulb.edu/divisions/aa/catalog/current/cla/english/engl_ud.html', 'Learned to write technically', [])
  ];

  @Input('display')display = {'udemy': true, 'udacity': true, 'csulb': true};

  @Output()sendCourse = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }

  sendSelectedCourse(course: Course) {
    this.sendCourse.emit(course);
  }
}
