import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Group} from "../../../Models/Group";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {TokenService} from "../../../services/Token.service";

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {

  selectedFile = null;
  group = new Group();
  result: object;
  loading = true;
  userId: string;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dataFormatHelper: DataFormatHelper,
              private  tokenService: TokenService,
              public tokenStorageService: TokenStorageService,


  ) {
  }
  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUser().userDetails;
    this.group.id = Guid.parse(this.route.snapshot.paramMap.get('groupId')).toString();
    this.httpBaseService.Get(ApiRouts.groups + '/' + this.group.id.toString())
      .subscribe(x => {
        this.group = x as Group;
        this.loading = false;
        console.log(x);
      });
  }
  canVisitProfile(studentId): boolean {
    if (this.tokenStorageService.getUser() !== null){
      if (this.tokenService.isAdmin() || this.group.curatorId === this.userId || this.userId === studentId){
        return true;
      }
    }
    return false;
  }
}
