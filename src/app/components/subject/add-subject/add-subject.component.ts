import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ApiRouts} from "../../../constants";
import {Guid} from "guid-typescript";
import {Subject} from "../../../Models/Subject";
import {Group} from "../../../Models/Group";
import {Teacher} from "../../../Models/Teacher";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subject = new Subject();
  availableTeachers: Teacher[] = [];
  availableGroups: Group[];

  loading = false;
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {}

  addSubject(){
    this.httpBaseService.Post(this.subject, ApiRouts.subjects).subscribe(x =>
    {
      this.location.back();
    });
  }
  ngOnInit(): void {
    let instituteId = Guid.parse(this.route.snapshot.paramMap.get('instituteId')).toString();
    this.subject.instituteId = instituteId;
    this.httpBaseService.Get(ApiRouts.teachers)
      .subscribe(x =>
      {
        var arr = x as Teacher[];
        console.log(x);
        this.availableTeachers = arr;
        this.loading = false;
      });
    this.httpBaseService.Get(ApiRouts.groups)
      .subscribe(x =>
      {
        var arr = x as Group[];
        console.log(x);
        this.availableGroups = arr;
        this.loading = false;
      });
  }
}
