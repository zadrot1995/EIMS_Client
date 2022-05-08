import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Group} from "../../../Models/Group";
import {Guid} from "guid-typescript";
import {group} from "@angular/animations";
import {Institute} from "../../../Models/Institute";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  selectedFile = null;
  group = new Group();
  availableTeachers: Teacher[];
  result: object;
  loading = false;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute) {}

  addGroup(){
    console.log(this.group);

    this.httpBaseService.Post(this.group, ApiRouts.groups).subscribe(x =>
    {
      this.router.navigate(['groups'], {});
    });
  }
  ngOnInit(): void {
    this.group.instituteId = Guid.parse(this.route.snapshot.paramMap.get('instituteId')).toString();
    this.httpBaseService.Get(ApiRouts.getInstitutes + '/teachers/' + Guid.parse(this.route.snapshot.paramMap.get('instituteId')).toString())
      .subscribe(x => {
        this.availableTeachers = x as Teacher[];
        this.loading = false;
        console.log(x);
      });
  }
}
