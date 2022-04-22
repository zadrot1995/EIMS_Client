import { Component, OnInit } from '@angular/core';
import {Institute} from "../../../Models/Institute";
import {HttpBaseService} from "../../../services/httpBase.service";
import {Router} from "@angular/router";
import {ApiRouts} from "../../../constants";
import {University} from "../../../Models/University";


@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {

  institute = new Institute();
  universities: University[] = [];
  loading = false;
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router) {}

  addInstitute(){
    this.httpBaseService.Post(this.institute, ApiRouts.getInstitutes).subscribe(x =>
    {
      this.router.navigate(['institute'], {});
    });
  }
  ngOnInit(): void {
    this.httpBaseService.Get(ApiRouts.getUniversities)
      .subscribe(x =>
      {
        var arr = x as University[];
        console.log(x);
        this.universities = arr;
        this.loading = false;
      });
  }
}
