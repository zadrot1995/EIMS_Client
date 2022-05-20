import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";
import {Location} from '@angular/common';
import {DataFormatHelper} from "../../../services/DataFormatHelper";


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
              private location: Location,
              private dataFormatHelper: DataFormatHelper

  ) {
  }

  ngOnInit(): void {
    this.teacher.id = Guid.parse(this.route.snapshot.paramMap.get('teacherId')).toString();

    this.httpBaseService.Get(ApiRouts.teachers + '/' + this.teacher.id.toString())
      .subscribe(x => {
        this.teacher = x as Teacher;
        this.loading = false;
        console.log(x);
      });
  }
  editTeacher() {
    this.loading = true;

    this.loading = true;
    let testData: FormData = new FormData();
    if (this.selectedFile !== null) {
      testData.append('file', this.selectedFile, this.selectedFile.name);
    }
    testData.append('firstName', this.teacher.firstName);
    testData.append('secondName', this.teacher.secondName);
    testData.append('education', this.teacher.education);
    testData.append('degree', this.teacher.degree);
    testData.append('about', this.teacher.about);
    testData.append('id', this.teacher.id);
    testData.append('userPhoto', this.teacher.userPhoto);


    console.log(testData);

    this.http.put(ApiRouts.teachers + "/" + this.teacher.id, testData).subscribe(response => {
      console.log(response);
      this.location.back();
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
}
