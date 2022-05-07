import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ApiRouts} from "../../../constants";
import {Post} from "../../../Models/Post";
import {Guid} from "guid-typescript";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-university-post',
  templateUrl: './add-university-post.component.html',
  styleUrls: ['./add-university-post.component.css']
})
export class AddUniversityPostComponent implements OnInit {

  post = new Post();
  result: object;
  selectedFile = null;

  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute,
              private http: HttpClient) {}

  addPost(){
    let testData:FormData = new FormData();
    testData.append('file', this.selectedFile, this.selectedFile.name);
    testData.append('universityId', this.post.universityId);
    testData.append('text', this.post.text);
    testData.append('title', this.post.title);

    console.log(testData);


    this.http.post(ApiRouts.posts, testData).subscribe(response => {
      console.log(response);
    });
    // this.httpBaseService.Post({file: testData }, ApiRouts.posts).subscribe(x =>
    // {
    //   console.log(x);
    //   this.location.back();
    //
    // });
  }

  ngOnInit(): void {
    this.post.universityId = Guid.parse(this.route.snapshot.paramMap.get('universityId')).toString();

  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

  }

}
