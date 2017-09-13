import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/course.model';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnChanges {
  @Input('listCourse')listCourse: Course;
  @Output() selectCourse = new EventEmitter<Course>();
  enter = false;
  @Input('displayCourse') displayCourse: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.displayCourse);
  }

  ngOnChanges() {
    console.log(this.displayCourse);
  }

  sendCourse() {
    this.selectCourse.emit(this.listCourse);
  }
}
