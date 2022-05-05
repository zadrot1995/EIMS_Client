import { Component, OnInit } from '@angular/core';
import {Subject} from "../../../Models/Subject";
import {Teacher} from "../../../Models/Teacher";
import {Group} from "../../../Models/Group";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Journal} from "../../../Models/Journal";

@Component({
  selector: 'app-subject-journal',
  templateUrl: './subject-journal.component.html',
  styleUrls: ['./subject-journal.component.css']
})
export class SubjectJournalComponent implements OnInit {

  selectedFile = null;
  journal = new Journal();
  subjectId: string;
  groupId: string
  result: object;
  loading = true;
  practicColCount = 0;
  availableTeachers: Teacher[];
  availableGroups: Group[];



  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private location: Location
  ) {
  }

  ngOnInit(): void {
    this.subjectId = Guid.parse(this.route.snapshot.paramMap.get('subjectId')).toString();
    this.groupId = Guid.parse(this.route.snapshot.paramMap.get('groupId')).toString();

    this.httpBaseService.Get(ApiRouts.marks + '/getMarks/' + this.subjectId + "/" + this.groupId)
      .subscribe(x => {
        this.journal = x as Journal;
        console.log(x);
        debugger;
        let lenghts = [];
        for (let y of this.journal.journalRows)
        {
          lenghts.push(y.practicMarks.length);
        }
        this.practicColCount = Math.max.apply(null, lenghts);
        console.log("PracticColCount: " + this.practicColCount);
        this.loading = false;
      });
  }

  editSubject() {
    this.loading = true;

    this.httpBaseService.Put(this.subject, ApiRouts.subjects + "/" + this.subject.id).subscribe(x =>
    {
      console.log(x);
      this.location.back();
    });
  }

}
