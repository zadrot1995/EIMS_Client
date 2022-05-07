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
import { EditGroupComponent } from './components/group/edit-group/edit-group.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { StudentOverviewComponent } from './components/student/student-overview/student-overview.component';
import { AddSubjectComponent } from './components/subject/add-subject/add-subject.component';
import { SubjectsComponent } from './components/subject/subjects/subjects.component';
import { EditSubjectComponent } from './components/subject/edit-subject/edit-subject.component';
import { SubjectOverviewComponent } from './components/subject/subject-overview/subject-overview.component';
import {MatExpansionModule} from '@angular/material/expansion';

import {
  DialogOverviewExampleDialog,
  SubjectJournalComponent
} from './components/subject/subject-journal/subject-journal.component';
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AddUniversityPostComponent } from './components/posts/add-university-post/add-university-post.component';
import {MatTableModule} from '@angular/material/table';

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
    path: 'groups/edit/:groupId',
    component: EditGroupComponent,
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
    path: 'students/add/:groupId',
    component: AddStudentsComponent,
  },
  {
    path: 'students/edit/:studentId',
    component: EditStudentComponent,
  },
  {
    path: 'students/overview/:studentId',
    component: StudentOverviewComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
  {
    path: 'subjects/add/:instituteId',
    component: AddSubjectComponent,
  },
  {
    path: 'subjects/edit/:subjectId',
    component: EditSubjectComponent,
  },
  {
    path: 'subjects/overview/:subjectId',
    component: SubjectOverviewComponent,
  },
  {
    path: 'marks/journal/:subjectId/:groupId',
    component: SubjectJournalComponent,
  },
  {
    path: 'posts/university/:universityId',
    component: AddUniversityPostComponent,
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
    GroupOverviewComponent,
    EditGroupComponent,
    EditStudentComponent,
    StudentOverviewComponent,
    AddSubjectComponent,
    SubjectsComponent,
    EditSubjectComponent,
    SubjectOverviewComponent,
    SubjectJournalComponent,
    DialogOverviewExampleDialog,
    ContactUsComponent,
    AddUniversityPostComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatExpansionModule,
      IvyCarouselModule,
      MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
