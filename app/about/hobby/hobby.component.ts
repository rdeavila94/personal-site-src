import { Component, OnInit, Input } from '@angular/core';
import {Hobby} from '../../models/hobby.model';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input('hobby')hobby: Hobby
  constructor() { }

  ngOnInit() {
  }

}
