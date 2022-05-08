import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {DataFormatHelper} from "../../../services/DataFormatHelper";


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
  const map = Array.prototype.map;


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
}
