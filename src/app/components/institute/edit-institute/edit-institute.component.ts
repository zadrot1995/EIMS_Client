import { Component, OnInit } from '@angular/core';
import {University} from "../../../Models/University";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Institute} from "../../../Models/Institute";

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css']
})
export class EditInstituteComponent implements OnInit {
  selectedFile = null;
  institute = new Institute();
  result: object;
  loading = true;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.institute.id = Guid.parse(this.route.snapshot.paramMap.get('instituteId'));
    this.httpBaseService.Get(ApiRouts.getInstitutes + '/' + this.institute.id.toString())
      .subscribe(x => {
        this.institute = x as Institute;
        this.loading = false;
        console.log(x);
      });
  }

  editUniversity() {
    this.loading = true;

    this.httpBaseService.Put(this.institute, ApiRouts.getInstitutes + "/" + this.institute.id).subscribe(x =>
    {
      console.log(x);
      this.router.navigate(['institutes'], {});
    });
  }

}
