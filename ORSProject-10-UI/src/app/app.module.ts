import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';

import { FooterComponent } from './footer/footer.component';
import { HttpServiceService } from './http-service.service';
import { AuthServiceService } from './auth-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { CollegeComponent } from './college/college.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { UserListComponent } from './user/user-list.component';

import { TimetableListComponent } from './timetable/timetable-list.component';

import { SubjectListComponent } from './subject/subject-list.component';
import { StudentListComponent } from './student/student-list.component';
import { RoleListComponent } from './role/role-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChangePasswordComponent } from './user/change-password.component';
import { MyprofileComponent } from './user/myprofile.component';

import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { JasperComponent } from './jasper/jasper.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { CommandmodelComponent } from './commandmodel/commandmodel.component';
import { CommandmodellistComponent } from './commandmodel/commandmodellist.component';
import { InsuracepolicyComponent } from './insuracepolicy/insuracepolicy.component';
import { InsuracepolicylistComponent } from './insuracepolicy/insuracepolicylist.component';
import { StartupComponent } from './startup/startup.component';
import { StartuplistComponent } from './startup/startuplist.component';
import { CricketComponent } from './cricket/cricket.component';
import { CricketlistComponent } from './cricket/cricketlist.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    RoleComponent,
    CourseComponent,
    CollegeComponent,
    SubjectComponent,
    StudentComponent,
    TimetableComponent,
    FacultyComponent,
    MarksheetComponent,
    UserListComponent,
    TimetableListComponent,
    SubjectListComponent,
    StudentListComponent,
    RoleListComponent,
    MarksheetListComponent,
    CourseListComponent,
    CollegeListComponent,
    FacultyListComponent,
    GetmarksheetComponent,
    ChangePasswordComponent,
    MyprofileComponent,
    
    MarksheetMeritListComponent,
    JasperComponent,
    CommandmodelComponent,
    CommandmodellistComponent,
    InsuracepolicyComponent,
    InsuracepolicylistComponent,
    StartupComponent,
    StartuplistComponent,
    CricketComponent,
    CricketlistComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    HttpServiceService,
    AuthServiceService,
    EndpointServiceService,

    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    },
    ServiceLocatorService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
