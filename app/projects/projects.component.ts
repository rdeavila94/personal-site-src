import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input('change') change: boolean;

  @Input('direction') direction: boolean;

  projectsList = [ new Project('Customer Relationship Manager', 'A database web application for performing CRUD operations on a list of customers. Built using Spring MVC and Hibernate with aspects incorporated for logging purposes. Application includes verification to ensure proper input for given fields. Done with Eclipse and MySQL.',  'assets/crm.gif'), new Project('Personal site', "My personal site that I built using Angular 4 and Bootstrap 4. I was in need of a personal website to serve as a portal of myself to the world and thus I embarked on perhaps my biggest front-end undertaking. My desire to develop this site is what incentivized me to learn a popular front-end JS framework and I settled on Angular. I built this site with extensive use of components, attribute and structural directives (built-in and custom), Bootstrap's grid system and classes, and my own custom styling.",  'assets/Capture.JPG'), new Project('UDP server/client', 'A Java program used to send messages from a client(s) to a server with the server spitting back the message it received from its respective client. Communication handled through UDP with Java datagrams. A multithreaded version using TCP/IP that I worked on with a group is on GitHub.',  'assets/udp.gif'), new Project('PokeMart', 'A JDBC program used view customer and product data for a fictional Pokemon themed business. Entity relationships consist of both one-to-many and many-to-many. Program was written with manual JDBC SQL statements (no ORM).',  'assets/jdbc.gif'), new Project('Othello', "Game of Othello/Reversi that allows the user to undo moves, show move history, and lists every possible valid move with each iteration. Done in C++ in an MVC pattern. The number of moves (or 'balls' represented by the letters 'B' and 'W') are stored in the heap with their quantity displayed to the user to verify clean memory management throughout the games lifecycle.",  'assets/othello.gif')];

  constructor() {}

  ngOnInit() {
  }
}
