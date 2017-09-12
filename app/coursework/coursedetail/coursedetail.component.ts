import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  @Input('detailCourse') detailCourse: Course;

  constructor() { }

  ngOnInit() {
  }

}
