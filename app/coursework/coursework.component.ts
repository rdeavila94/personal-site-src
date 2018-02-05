import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-coursework',
  templateUrl: './coursework.component.html',
  styleUrls: ['./coursework.component.css']
})
export class CourseworkComponent implements OnInit {
  /*this is the boolean that determines whether to change screens*/
  @Input('change') change: boolean;
  /*The current page, which determines whether the animation should bounce in left or right*/
  @Input('direction') direction: boolean;

  selectedCourse: Course;
  constructor() { }
  display = {'udemy': true, 'udacity': true, 'csulb': true};

  ngOnInit() {
  }

}
