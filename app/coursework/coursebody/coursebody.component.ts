import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-coursebody',
  templateUrl: './coursebody.component.html',
  styleUrls: ['./coursebody.component.css']
})
export class CoursebodyComponent implements OnInit {
  @Output()displayEmitter = new EventEmitter<string>();
  @Output()button = {'udemy': true, 'udacity': true, 'csulb': true};

  constructor() { }

  ngOnInit() {
  }

  emitButtonClick(institution: string) {
    this.button[institution] = !this.button[institution];
    this.displayEmitter.emit(institution);
  }
}
