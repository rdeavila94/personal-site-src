import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-coursework',
  templateUrl: './coursework.component.html',
  styleUrls: ['./coursework.component.css']
})
export class CourseworkComponent implements OnInit {
  @Input('change') change: boolean;
  selectedCourse: Course;
  constructor() { }

  ngOnInit() {
  }

}
