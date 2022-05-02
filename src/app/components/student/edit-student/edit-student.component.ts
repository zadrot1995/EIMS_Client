import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  selectedFile = null;
  student = new Student();
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
    this.student.id = Guid.parse(this.route.snapshot.paramMap.get('studentId'));

    this.httpBaseService.Get(ApiRouts.students + '/' + this.student.id.toString())
      .subscribe(x => {
        this.student = x as Student;
        this.loading = false;
        console.log(x);
      });
  }
  editStudent() {
    this.loading = true;
    this.httpBaseService.Put(this.student, ApiRouts.students + "/" + this.student.id).subscribe(x =>
    {
      console.log(x);
      this.location.back();
    });
  }
}
