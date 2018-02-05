import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('change') change: boolean;
  /*The current page, which determines whether the animation should bounce in left or right*/
  @Input('direction') direction: boolean;

  constructor() { }

  ngOnInit() {
  }

}
