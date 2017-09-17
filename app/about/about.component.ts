import { Component, OnInit, Input } from '@angular/core';
import {Hobby} from '../models/hobby.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input('change') change: boolean;
  hobbies = [new Hobby('assets/boxing.jpg', 'Showing some youngsters how to throw a straight right.'), new Hobby('assets/sushi-cafe.jpg', 'What I would consider a pretty good day.'), new Hobby('assets/dancing.jpg', 'A night out dancing in Long Beach, CA')];
  constructor() { }

  ngOnInit() {
  }

}
