import { Component, OnInit } from '@angular/core';
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Teacher} from "../../../Models/Teacher";
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Group} from "../../../Models/Group";

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  selectedFile = null;
  group = new Group();
  result: object;
  loading = true;
  availableTeachers: Teacher[];



  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private location: Location
  ) {
  }

  ngOnInit(): void {
    this.group.id = Guid.parse(this.route.snapshot.paramMap.get('groupId')).toString();
    this.httpBaseService.Get(ApiRouts.groups + '/' + this.group.id)
      .subscribe(x => {
        this.group = x as Group;
        console.log(x);
        this.httpBaseService.Get(ApiRouts.getInstitutes + '/teachers/' + this.group.instituteId)
          .subscribe(y => {
            this.availableTeachers = y as Teacher[];
            this.loading = false;
            console.log(y);
          });

      });
  }

  editUniversity() {

  }

}
