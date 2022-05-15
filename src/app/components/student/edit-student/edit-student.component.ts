import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";
import {DataFormatHelper} from "../../../services/DataFormatHelper";

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
              private location: Location,
              private dataFormatHelper: DataFormatHelper
  ) {
  }

  ngOnInit(): void {
    this.student.id = Guid.parse(this.route.snapshot.paramMap.get('studentId')).toString();

    this.httpBaseService.Get(ApiRouts.students + '/' + this.student.id.toString())
      .subscribe(x => {
        this.student = x as Student;
        this.loading = false;
        console.log(x);
      });
  }

  editStudent(){
    this.loading = true;
    let testData: FormData = new FormData();
    testData.append('file', this.selectedFile, this.selectedFile.name);
    testData.append('firstName', this.student.firstName);
    testData.append('secondName', this.student.secondName);
    testData.append('id', this.student.id);
    testData.append('userPhoto', this.student.userPhoto);


    console.log(testData);

    this.http.put(ApiRouts.students + "/" + this.student.id, testData).subscribe(response => {
      console.log(response);
      this.location.back();
    });
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
}
