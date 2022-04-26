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

const routes: Routes = [
  {
    path: '',
    component: UniversitiesComponent,
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
    path: 'institutes',
    component: InstitutesComponent,
  },
  {
    path: 'institute/add',
    component: AddInstituteComponent,
  },
  {
    path: 'universities/edit/:id',
    component: EditUnivercityComponent,
  },
  {
    path: 'institutes/edit/:id',
    component: EditInstituteComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
  {
    path: 'teachers/add',
    component: AddTeacherComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'groups/add',
    component: AddGroupComponent,
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
    StudentsComponent
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
