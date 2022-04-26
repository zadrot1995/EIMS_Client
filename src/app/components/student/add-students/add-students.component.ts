import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';
import {StudentsService} from '../../../services/students.service';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";
const { read, write, utils } = XLSX;
type AOA = any[][];

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {

  selectedFile = null;
  student = new Student();
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router) {}

  addTeacher(){
    this.httpBaseService.Post(this.student, ApiRouts.students).subscribe(x =>
    {
      console.log(x);
      this.router.navigate(['students'], {});
    });
  }
  ngOnInit(): void {
  }
}
