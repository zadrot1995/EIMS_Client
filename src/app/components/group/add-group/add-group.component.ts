import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../Models/Teacher";
import {HttpBaseService} from "../../../services/httpBase.service";
import {Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {Group} from "../../../Models/Group";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  selectedFile = null;
  group = new Group();
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router) {}

  addGroup(){
    this.httpBaseService.Post(this.group, ApiRouts.groups).subscribe(x =>
    {
      console.log(x);
      this.router.navigate(['groups'], {});
    });
  }
  ngOnInit(): void {
  }
}
