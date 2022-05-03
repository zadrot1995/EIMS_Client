import { Component, OnInit } from '@angular/core';
import {Group} from "../../../Models/Group";
import {HttpBaseService} from "../../../services/httpBase.service";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {ApiRouts} from "../../../constants";
import {Subject} from "../../../Models/Subject";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper) {}

  loading = true;
  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.subjects)
      .subscribe(x =>
      {
        var arr = x as Subject[];
        console.log(x);
        this.subjects = arr;
        this.loading = false;
      });
  }

  deleteSubject(subjectId){
    this.httpBaseService.Delete(ApiRouts.subjects + "/" + subjectId)
      .subscribe(x =>
      {
        console.log(x);
        window.location.reload();
      });
  }
}
