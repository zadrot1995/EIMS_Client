import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Guid} from "guid-typescript";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Post} from "../../../Models/Post";

@Component({
  selector: 'app-edit-univercity',
  templateUrl: './edit-univercity.component.html',
  styleUrls: ['./edit-univercity.component.css']
})
export class EditUnivercityComponent implements OnInit {
  selectedFile = null;
  university = new University();
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
    this.university.id = Guid.parse(this.route.snapshot.paramMap.get('universityId'));

    this.httpBaseService.Get(ApiRouts.getUniversities + '/' + this.university.id.toString())
      .subscribe(x => {
        this.university = x as University;
        this.loading = false;
        console.log(x);
      });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    let testData:FormData = new FormData();
    testData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(ApiRouts.addUniversityImage + '/' + this.university.id.toString(), testData).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }
  deleteImage(imageId){
    this.httpBaseService.Delete(ApiRouts.addUniversityImage + "/delete/" + imageId)
      .subscribe(x =>
      {
        console.log(x);
      });
    window.location.reload();
  }
  editUniversity() {
    this.loading = true;

    this.httpBaseService.Put(this.university, ApiRouts.getUniversities + "/" + this.university.id).subscribe(x =>
    {
      console.log(x);
      this.location.back();
    });
  }
  deletePost(postId){
    this.httpBaseService.Delete(ApiRouts.posts + "/" + postId)
      .subscribe(x =>
      {
        console.log(x);
      });
    window.location.reload();
  }
}
