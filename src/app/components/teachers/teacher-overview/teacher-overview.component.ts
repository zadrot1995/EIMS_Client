import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {

  teacher = new Teacher();
  result: object;
  loading = true;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.teacher.id = Guid.parse(this.route.snapshot.paramMap.get('teacherId'));
    this.httpBaseService.Get(ApiRouts.teachers + '/' + this.teacher.id.toString())
      .subscribe(x => {
        this.teacher = x as Teacher;
        this.loading = false;
        console.log(x);
      });
  }
}
