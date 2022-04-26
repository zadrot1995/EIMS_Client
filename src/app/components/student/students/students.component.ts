import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper) {}

  loading = true;
  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.students)
      .subscribe(x =>
      {
        var arr = x as Student[];
        console.log(x);
        this.students = arr;
        this.loading = false;
      });
  }

  deleteUniversity(studentId){
    this.httpBaseService.Delete(ApiRouts.students + "/" + studentId)
      .subscribe(x =>
      {
        console.log(x);
        window.location.reload();

      });
  }

}
