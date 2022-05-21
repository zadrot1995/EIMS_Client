import { Component, OnInit } from '@angular/core';
import {StudentProfile} from "../../../Models/StudentProfile";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {ApiRouts} from "../../../constants";
import {Mark} from "../../../Models/Mark";
import {TeacherProfileDto} from "../../../Models/TeacherProfileDto";
import {TokenService} from "../../../services/Token.service";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  userProfile: TeacherProfileDto;
  loading = true;
  selectedFile = null;
  isAdmit = false;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private tokenStorageService: TokenStorageService,
              private dataFormatHelper: DataFormatHelper,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.isUserAuthenticated()){
      this.isAdmit = this.tokenService.isAdmin();
      console.log(this.isAdmit);
    }
    this.httpBaseService.Get(ApiRouts.teachers + '/get-teacher-profile/' + this.tokenStorageService.getUser().id)
      .subscribe((x) => {
          this.userProfile = x as TeacherProfileDto;
          this.loading = false;
          console.log(x);
        },
        error => console.log('oops', error));
  }
}
