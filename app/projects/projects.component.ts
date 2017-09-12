import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input('change') change: boolean;
  projectsList = [new Project('Personal site', 'my personal website', 'assets/Capture.JPG'), new Project('CRM', 'CRM for performing CRUD operations.', 'assets/crm.gif')]

  constructor() {}

  ngOnInit() {
  }
}
