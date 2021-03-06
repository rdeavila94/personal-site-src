import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('thisProject')thisProject: Project;
  constructor() { }

  ngOnInit() {
    this.thisProject.imgPath = this.thisProject.animatedImgPath;
  }

}
