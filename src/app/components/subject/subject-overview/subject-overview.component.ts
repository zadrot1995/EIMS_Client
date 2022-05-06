import { Component, OnInit } from '@angular/core';
import {Group} from "../../../Models/Group";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Subject} from "../../../Models/Subject";
import {Mark} from "../../../Models/Mark";
import {Journal} from "../../../Models/Journal";
import {MatDialogModule} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-subject-overview',
  templateUrl: './subject-overview.component.html',
  styleUrls: ['./subject-overview.component.css']
})
export class SubjectOverviewComponent implements OnInit {


  selectedFile = null;
  subject = new Subject();
  result: object;
  loading = true;
  marks: Mark[];

  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.subject.id = Guid.parse(this.route.snapshot.paramMap.get('subjectId')).toString();
    this.httpBaseService.Get(ApiRouts.subjects + '/' + this.subject.id.toString())
      .subscribe(x => {
        this.subject = x as Subject;
        this.loading = false;
        console.log(x);
      });
  }
}
