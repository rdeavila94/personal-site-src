import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input('change') change: boolean;
  projectsList = [new Project('Personal site', 'I built this website using Angular4 and Bootstrap. I was in need of a personal website to serve as my portal of myself to the world. I learned Angular for this project and it has become my front end framework of choice.  Will attempt to include server side code to make a functional contact form here, bypassing the need for emails.', 'assets/Capture.JPG', 'assets/Capture.JPG'), new Project('CRM', 'Aspects for logging data. Includes validation of input. Performs CRUD operations.', 'assets/crm.jpg', 'assets/crm.gif')];

  constructor() {}

  ngOnInit() {
  }
}
