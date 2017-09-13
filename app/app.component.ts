import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  colorscale = {color1: '#000', color2: '#bfbfbf', color3: '#808080', color4: '#3f3f3f', color5: '#fff'};
  page: number;

  ngOnInit() {
    this.page = 1;
  }
}
