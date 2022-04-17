import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Guid} from "guid-typescript";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-univercity',
  templateUrl: './edit-univercity.component.html',
  styleUrls: ['./edit-univercity.component.css']
})
export class EditUnivercityComponent implements OnInit {
  selectedFile = null;
  university = new University();
  result: object;

  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.university.id = Guid.parse(this.route.snapshot.paramMap.get('id'));
    this.httpBaseService.Get(ApiRouts.getUniversities + '/' + this.university.id.toString())
      .subscribe(x => {
        this.university = x as University;
      });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    let testData:FormData = new FormData();
    testData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(ApiRouts.addUniversityImage + '/' + this.university.id.toString(), testData).subscribe(response => {
      console.log(response);
    });
  }

  editUniversity() {
  }
}
