import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";
import {DataFormatHelper} from "../../../services/DataFormatHelper";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[];
  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper) {}

  loading = true;
  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.teachers)
      .subscribe(x =>
      {
        var arr = x as Teacher[];
        console.log(x);
        this.teachers = arr;
        this.loading = false;
      });
  }

  deleteUniversity(universityId){
    this.httpBaseService.Delete(ApiRouts.getUniversities + "/" + universityId)
      .subscribe(x =>
      {
        console.log(x);
      });
  }

}
