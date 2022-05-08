import { Component, OnInit } from '@angular/core';
import {HttpBaseService} from '../../../services/httpBase.service';
import {University} from '../../../Models/University';
import {ApiRouts} from '../../../constants';
import {Router} from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-universities',
  templateUrl: './add-universities.component.html',
  styleUrls: ['./add-universities.component.css']
})
export class AddUniversitiesComponent implements OnInit {

  selectedFile = null;
  university = new University();
  result: object;
  isInstitutesLoad
  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private location: Location) {}

  addUniversity(){
    this.httpBaseService.Post(this.university, ApiRouts.getUniversities).subscribe(x =>
    {
      console.log(x);
      this.location.back();
    });
  }
  ngOnInit(): void {
  }

}
