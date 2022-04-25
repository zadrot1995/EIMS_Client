import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {


  selectedFile = null;
  teacher = new Teacher();
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router) {}

  addTeacher(){
    this.httpBaseService.Post(this.teacher, ApiRouts.teachers).subscribe(x =>
    {
      console.log(x);
      this.router.navigate(['teachers'], {});
    });
  }
  ngOnInit(): void {
  }


}
