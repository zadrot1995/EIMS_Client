import { Component, OnInit } from '@angular/core';
import {Group} from "../../../Models/Group";
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Subject} from "../../../Models/Subject";

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  selectedFile = null;
  subject = new Subject();
  result: object;
  loading = true;
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
    this.subject.id = Guid.parse(this.route.snapshot.paramMap.get('subjectId')).toString();
    this.httpBaseService.Get(ApiRouts.subjects + '/' + this.subject.id)
      .subscribe(x => {
        this.subject = x as Group;
        console.log(x);
        this.httpBaseService.Get(ApiRouts.getInstitutes + '/teachers/' + this.subject.instituteId)
          .subscribe(y => {
            this.availableTeachers = y as Teacher[];
            this.loading = false;
            console.log(y);
          });

        this.httpBaseService.Get(ApiRouts.groups + '/byInstitute/' + this.subject.instituteId)
          .subscribe(y => {
            this.availableGroups = y as Group[];
            this.loading = false;
            console.log(y);
          });
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
