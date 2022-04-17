import { Component, OnInit } from '@angular/core';
import {University} from '../../../Models/University';
import {HttpBaseService} from '../../../services/httpBase.service';
import {ApiRouts} from '../../../constants';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  universities: University[];
  constructor(public httpBaseService: HttpBaseService) {}
  loading = true;
  ngOnInit(): void {

      this.httpBaseService.Get(ApiRouts.getUniversities)
        .subscribe(x =>
        {
          var arr = x as University[];
          console.log(arr);
          this.universities = arr;
          this.loading = false;
        });
  }
  shortDescription(str:string){
    if(str.length > 30){
      return str.substr(0, 200) + '...';
    }
    else {
      return str;
    }
  }
}
