import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Group} from "../../../Models/Group";
import {DataFormatHelper} from "../../../services/DataFormatHelper";

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


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dataFormatHelper: DataFormatHelper

  ) {
  }

  ngOnInit(): void {
    this.group.id = Guid.parse(this.route.snapshot.paramMap.get('groupId')).toString();
    this.httpBaseService.Get(ApiRouts.groups + '/' + this.group.id.toString())
      .subscribe(x => {
        this.group = x as Group;
        this.loading = false;
        console.log(x);
      });
  }
}
