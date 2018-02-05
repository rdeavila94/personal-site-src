import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('change') change: boolean;
  /*The current page, which determines whether the animation should bounce in left or right*/
  @Input('direction') direction: boolean;

  constructor() { }

  ngOnInit() {
  }

}
