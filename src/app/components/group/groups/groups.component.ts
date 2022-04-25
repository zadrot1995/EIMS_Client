import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {ApiRouts} from "../../../constants";
import {Group} from "../../../Models/Group";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper) {}

  loading = true;
  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.groups)
      .subscribe(x =>
      {
        var arr = x as Group[];
        console.log(x);
        this.groups = arr;
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
