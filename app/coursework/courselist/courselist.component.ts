import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  /*Keep the course providers lowercased! IMPORTANT!*/

  courses: Course[] = [
    new Course('Introductory Programming', 'csulb', '', 'My very first programming course. Learned the basics: loops, conditional statements, variables, methods, program flow. The language used was Java but would go on to become Python years after I completed it. This was the class that I became a teaching assistant and lab instructor for.' , []),


    new Course('Angular 4 - The Complete Guide', 'udemy', 'https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview', 'Comprehensive course on Angular 4 (no outdated Angular 2 or AngularJS). Topics ranged from basic material such as: the CLI, ways and directions of property binding, string interpolation, directives, and components to advanced topics such as: Angular Universal, pipes, authentication, unit testing, plus much more. Emphasis was placed on developing best practices to avoid bad Angular code. Highly recommended to click More Info to view the extent of material learned in this course as there truly was A LOT. The knowledge I obtained early on in this course was used to build my personal website.',[]),

    new Course('Spring & Hibernate', 'udemy', 'https://www.udemy.com/spring-hibernate-tutorial/learn/v4/overview', 'Fundamentals of Spring and Hibernate using Eclipse and Tomcat. Spring topics covered were: inversion of control, dependency injection, bean scopes and lifecycles, configuration with XML, config files or Java, data binding, controllers and views, request mappings and parameters, validation (built in and custom), and aspect oriented programming. Hibernate topics covered: development environment setup, configuration, underlying concepts (sessions), CRUD operations, one-to-one and one-to-many mappings. Learned how to put everything together to develop applications (done with Eclipse and MySQL).', [{projectName: 'CRM', projectLink: 'https://github.com/rdeavila94/CRM'}]),

    new Course('Apache Maven', 'udemy', 'https://www.udemy.com/learning-apache-maven/learn/v4/overview', 'Comprehensive course on using Maven for Java builds. I decided to take this after my Spring & Hibernate course when I realized how tedious manual builds can become. Topics covered: installation, bulding projects, managing dependencies, Maven lifecycle, plug-ins, goals, archetypes, and encrypting passwords. Course done using Eclipse.',  []),

      new Course('Technical Communication', 'csulb', 'http://csulb.edu/divisions/aa/catalog/current/cla/english/engl_ud.html', 'Differences between technical writing for engineers and scientists in contrast to academic writing. Improved my ability to write succinct scientific or business oriented papers.', []),

    new Course('Web Design I, II, III' , 'csulb', 'http://web.csulb.edu/divisions/aa/catalog/current/coe/computer_engineering/cecsum03.html', 'My courses taken to obtain my minor in web technologies. Introductory course covered basic web design with HTML, CSS, JavaScript and JQuery. Intermediate course covered Bootstrap and some WordPress, including a large group project where we had to develop a WordPress site for a non-profit organization (we are NOT responsible for changes they have made to it). Advanced course covered WordPress and PHP.', [{projectName: 'NPO website', projectLink: 'http://missionsupporters.redemsong.org/'}]),

    new Course('Machine Learning', 'udacity', 'https://www.udacity.com/course/machine-learning--ud262', 'Supervised learning: regression & classification, neural networks, instance based learning, support vector machines, computational learning theory. Unsupervised learning: randomized optimization, clustering, feature selection and transformation. Reinforcement learning: Markov decision process, game theory, greedy exploration. Emphasis was placed in the mathematical foundations of machine learning.', []),

    new Course('Database Fundamentals', 'csulb', '', 'Design of databases and their relationships using UML and SQL. One-to-one, one-to-many, many-to-many, recursive associations, multivalued atrtibutes etc. Learned how to normalize database designs and ridding them of redundancies. Used an Apache Derby database with JDBC to demonstrate and apply skills.' , []),

    new Course('C++', 'csulb', '', 'Covered the fundamental and OOP features of C++. Memory management, templates, pointers and references, pointer arithmetic, classes and objects. Compared and contrasted C++ with higher level languages (particularly Java) to comprehend underlying features that they `do for you` that C++ does not. Extensive studies on the stack and heap.' , [{projectName: 'Rational Array', projectLink: 'https://github.com/rdeavila94/Rational-Array'}, {projectName: 'Gameboard', projectLink: 'https://github.com/rdeavila94/Gameboard'}]),

    new Course('Data Structures and Algorithms', 'csulb', '', 'Studied and implemented popular algorithms and data structures. Covered various types of algorithms (i.e. greedy, divide and conquer) and data structures (i.e. trees, lists, graphs). Learned which algorithms and/or data structures were optimal for given scenarios and their respective complexities. Primm-Dijkstra algorithm, quick sort, radix sort, bubble sort, hash maps, self-balancing trees, etc.  Respective complexities studied for each.', [{projectName: 'Red Black Tree', projectLink: 'https://github.com/rdeavila94/Red-Black-Tree'}, {projectName: 'Weighted Graph', projectLink: 'https://github.com/rdeavila94/Weighted-Graph'}, {projectName: 'Hash Map', projectLink: 'https://github.com/rdeavila94/Hash-Map'}]),

    new Course('Version Control with Git', 'udacity', 'https://www.udacity.com/course/version-control-with-git--ud123', 'A quick hands on course on working with Git. Creating repos, viewing history, adding commits, tagging, branching, merging, and undoing.', []),

    new Course('Software Engineering Project', 'csulb', '', 'A two semester long course for students to familiarize themselves with and become accustomed to industrial-like agile software development. JIRA was used for issue tracking. Worked with a team of four other students to design and develop a JDBC project called PokeMart. Wrote use cases, user stories, UML diagrams, sequence diagrams and class diagrams. For the second semester my group enrolled in a different section and thus I was forced to join a different team midway, who were developing an Uber-like carpooling app with Bootstrap, PHP and a MySQL database. Only worked on front-end for that project.', [{projectName: 'PokeMart', projectLink: 'https://github.com/jalesco/PokemonMarket'}, {projectName: 'Carpool App', projectLink: 'https://github.com/alejandrom95/carpool'}])


  ];

  @Input('display')display = {'udemy': true, 'udacity': true, 'csulb': true};

  @Output()sendCourse = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }

  sendSelectedCourse(course: Course) {
    this.sendCourse.emit(course);
  }
}
