import { Component, OnInit } from '@angular/core';
import {UserProfile} from "../../../Models/UserProfile";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/Token.service";
import {TokenStorageService} from "../../../services/TokenStorageService";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  userProfile: UserProfile;
  loading = true;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.httpBaseService.Get(ApiRouts.students + '/get-student-profile/' + this.tokenStorageService.getUser().id)
      .subscribe(x => {
        this.userProfile = x as UserProfile;
        this.loading = false;
        console.log(x);
      });
  }

}
