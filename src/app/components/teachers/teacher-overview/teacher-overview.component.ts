import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";
import {TeacherProfileDto} from "../../../Models/TeacherProfileDto";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {TokenService} from "../../../services/Token.service";

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {


  userProfile: TeacherProfileDto;
  loading = true;
  selectedFile = null;
  isAdmit = false;
  userId: string;



  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private tokenStorageService: TokenStorageService,
              private dataFormatHelper: DataFormatHelper,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUser().userDetails;

    if (this.tokenService.isUserAuthenticated()){
      this.isAdmit = this.tokenService.isAdmin();
      console.log(this.isAdmit);
    }
    var id = Guid.parse(this.route.snapshot.paramMap.get('teacherId')).toString();

    this.httpBaseService.Get(ApiRouts.teachers + '/teacher-overview/' + id)
      .subscribe((x) => {
          this.userProfile = x as TeacherProfileDto;
          this.loading = false;
          console.log(x);
        },
        error => console.log('oops', error));
  }

  canVisitProfile(): boolean {
    if (this.tokenStorageService.getUser() !== null){
      if (this.tokenService.isAdmin() || this.userProfile.teacher.id === this.userId){
        return true;
      }
    }
    return false;
  }
}
