import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgPath = 'assets/personal.JPG';
  @Input('currentPage') currentPage: number;
  @Output()selectedPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  emitPage(pageNumber: number) {
    this.selectedPage.emit(pageNumber);
  }
}
