import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {Institute} from "../../../Models/Institute";


@Component({
  selector: 'app-university-overview',
  templateUrl: './university-overview.component.html',
  styleUrls: ['./university-overview.component.css']
})
export class UniversityOverviewComponent implements OnInit {
  selectedFile = null;
  university = new University();
  result: object;
  loading = true;
  panelOpenState = false;
  isInstituteLoad = false;

  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private datahelper: DataFormatHelper
  ) {
  }

  ngOnInit(): void {
    this.university.id = Guid.parse(this.route.snapshot.paramMap.get('id'));
    this.httpBaseService.Get(ApiRouts.getUniversities + '/' + this.university.id.toString())
      .subscribe(x => {
        this.university = x as University;
        this.loading = false;
        console.log(x);
      });
  }
  loadInstitute(){
    if(!this.isInstituteLoad){
      this.httpBaseService.Get(ApiRouts.getInstitutes + '/university/' + this.university.id.toString())
        .subscribe(x => {
          this.university.institutes = x as Institute[];
          this.isInstituteLoad = true;
          console.log(x);
        });
    }
  }
}
