import { Component, OnInit, Input } from '@angular/core';
import {Hobby} from '../models/hobby.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input('change') change: boolean;
  hobbies = [new Hobby('Coding', 'assets/coder.gif', 'I love doodling on the web.')];
  constructor() { }

  ngOnInit() {
  }

}
