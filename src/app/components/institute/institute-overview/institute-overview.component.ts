import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Institute} from "../../../Models/Institute";
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-institute-overview',
  templateUrl: './institute-overview.component.html',
  styleUrls: ['./institute-overview.component.css']
})
export class InstituteOverviewComponent implements OnInit {

  selectedFile = null;
  institute = new Institute();
  result: object;
  loading = true;
  panelOpenState = false;



  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.institute.id = Guid.parse(this.route.snapshot.paramMap.get('id'));
    this.httpBaseService.Get(ApiRouts.getInstitutes + '/' + this.institute.id.toString())
      .subscribe(x => {
        this.institute = x as Institute;
        this.loading = false;
        console.log(x);
      });
  }
}
