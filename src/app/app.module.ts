import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AddStudentsComponent} from './components/add-students/add-students.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { UniversitiesComponent } from './components/universities/universities.component';
import { AddUniversitiesComponent } from './components/add-universities/add-universities.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

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
];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    HeaderComponent,
    FooterComponent,
    UniversitiesComponent,
    AddUniversitiesComponent
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
