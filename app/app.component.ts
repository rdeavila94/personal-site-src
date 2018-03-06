import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personalsite';
  page: number;

  /*this variable handles the direction of the exits/entrances of the components. True represents
  * new components coming in right, false represents coming in left. From this you can decipher the directionality
  * of both exiting and entering components.*/
  direction: boolean;



  ngOnInit() {
    this.page = 1;
  }

  changePage(newPage: number) {
    // if the page you selected is the one you're on, do nothing.
    if (newPage === this.page){
          } else if (newPage > this.page) {
      this.direction = true;
    } else {this.direction = false; }

    this.page = newPage;
  }
}
