import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input('change') change: boolean;
  projectsList = [new Project('Personal site', 'I built this website using Angular4 and Bootstrap. I was in need of a personal website to serve as a portal of myself to the world. I learned Angular for this project and it has become my front end framework of choice.  Will attempt to include server side code to make a functional contact form here, bypassing the need for emails.', 'assets/Capture.JPG', 'assets/Capture.JPG'), new Project('CRM', 'Aspects for logging data. Includes validation of input. Performs CRUD operations.', 'assets/crm.jpg', 'assets/crm.gif'), new Project('UDP server/client', 'A Java program used to send messages from a client(s) to a server with the server spitting back the message it received from its respective client. Communication handled through UDP with Java datagrams. A multithreaded version using TCP/IP that I worked on with a group is on GitHub.', 'assets/udp.JPG', 'assets/udp.gif'), new Project('Othello', "Game of Othello/Reversi that allows the user to undo moves, show move history, and lists every possible valid move with each iteration. Done in C++ in an MVC pattern. The number of moves (or 'balls' represented by the letters 'B' and 'W') are stored on the heap with their quantity displayed to the user to verify clean memory management throughout the games lifecycle.", 'assets/othello.JPG', 'assets/othello.gif')];

  constructor() {}

  ngOnInit() {
  }
}
