import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { CourselistComponent } from './coursework/courselist/courselist.component';
import { CoursedetailComponent } from './coursework/coursedetail/coursedetail.component';
import { CourseComponent } from './coursework/courselist/course/course.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { DelayedExitDirective } from './directives/delayed-exit.directive';
import { ProjectComponent } from './projects/project/project.component';
import { CoursebodyComponent } from './coursework/coursebody/coursebody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    CourseworkComponent,
    CourselistComponent,
    CoursedetailComponent,
    CourseComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    DelayedExitDirective,
    ProjectComponent,
    CoursebodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
