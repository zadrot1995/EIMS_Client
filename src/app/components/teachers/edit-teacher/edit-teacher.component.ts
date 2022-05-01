import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  selectedFile = null;
  teacher = new Teacher();
  result: object;
  loading = true;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private location: Location
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
  editTeacher() {
    this.loading = true;

    this.httpBaseService.Put(this.teacher, ApiRouts.teachers + "/" + this.teacher.id).subscribe(x =>
    {
      console.log(x);
      this.location.back();
    });
  }
}
