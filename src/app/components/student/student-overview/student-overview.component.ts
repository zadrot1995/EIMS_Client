import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.css']
})
export class StudentOverviewComponent implements OnInit {

  student = new Student();
  result: object;
  loading = true;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.student.id = Guid.parse(this.route.snapshot.paramMap.get('studentId'));
    this.httpBaseService.Get(ApiRouts.students + '/' + this.student.id.toString())
      .subscribe(x => {
        this.student = x as Student;
        this.loading = false;
        console.log(x);
      });
  }
}
