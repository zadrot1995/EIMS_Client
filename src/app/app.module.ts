import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AddStudentsComponent} from './components/student/add-students/add-students.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { UniversitiesComponent } from './components/university/universities/universities.component';
import { AddUniversitiesComponent } from './components/university/add-universities/add-universities.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { InstitutesComponent } from './components/institute/institutes/institutes.component';
import { AddInstituteComponent } from './components/institute/add-institute/add-institute.component';
import { EditUnivercityComponent } from './components/university/edit-univercity/edit-univercity.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { EditInstituteComponent } from './components/institute/edit-institute/edit-institute.component';
import { TeachersComponent } from './components/teachers/teachers/teachers.component';
import { AddTeacherComponent } from './components/teachers/add-teacher/add-teacher.component';
import { GroupsComponent } from './components/group/groups/groups.component';
import { AddGroupComponent } from './components/group/add-group/add-group.component';
import { StudentsComponent } from './components/student/students/students.component';
import { UniversityOverviewComponent } from './components/university/university-overview/university-overview.component';
import { InstituteOverviewComponent } from './components/institute/institute-overview/institute-overview.component';
import { TeacherOverviewComponent } from './components/teachers/teacher-overview/teacher-overview.component';
import { EditTeacherComponent } from './components/teachers/edit-teacher/edit-teacher.component';
import { GroupOverviewComponent } from './components/group/group-overview/group-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/universities',
    pathMatch: 'full'
  },
  {
    path: 'universities',
    component: UniversitiesComponent,
  },
  {
    path: 'universities/add',
    component: AddUniversitiesComponent,
  },
  {
    path: 'universities/overview/:id',
    component: UniversityOverviewComponent,
  },
  {
    path: 'institutes',
    component: InstitutesComponent,
  },
  {
    path: 'institutes/add/:universityId',
    component: AddInstituteComponent,
  },
  {
    path: 'institutes/overview/:id',
    component: InstituteOverviewComponent,
  },
  {
    path: 'universities/edit/:universityId',
    component: EditUnivercityComponent,
  },
  {
    path: 'institutes/edit/:instituteId',
    component: EditInstituteComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
  {
    path: 'teachers/add/:instituteId',
    component: AddTeacherComponent,
  },
  {
    path: 'teachers/overview/:teacherId',
    component: TeacherOverviewComponent,
  },
  {
    path: 'teachers/edit/:teacherId',
    component: EditTeacherComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'groups/add/:instituteId',
    component: AddGroupComponent,
  },
  {
    path: 'groups/overview/:groupId',
    component: GroupOverviewComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'students/add',
    component: AddStudentsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    HeaderComponent,
    FooterComponent,
    UniversitiesComponent,
    AddUniversitiesComponent,
    InstitutesComponent,
    AddInstituteComponent,
    EditUnivercityComponent,
    PreloaderComponent,
    EditInstituteComponent,
    TeachersComponent,
    AddTeacherComponent,
    GroupsComponent,
    AddGroupComponent,
    StudentsComponent,
    UniversityOverviewComponent,
    InstituteOverviewComponent,
    TeacherOverviewComponent,
    EditTeacherComponent,
    GroupOverviewComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
