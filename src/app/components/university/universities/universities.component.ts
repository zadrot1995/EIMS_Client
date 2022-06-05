import { Component, OnInit } from '@angular/core';
import {University} from '../../../Models/University';
import {HttpBaseService} from '../../../services/httpBase.service';
import {ApiRouts} from '../../../constants';
import {MatListModule} from '@angular/material/list';
import {TokenService} from "../../../services/Token.service";

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  universities: University[];
  isAdmit = false;
  constructor(public httpBaseService: HttpBaseService,
              private tokenService: TokenService) {}
  loading = true;
  ngOnInit(): void {
    if (this.tokenService.isUserAuthenticated()){
      this.isAdmit = this.tokenService.isAdmin();
      console.log(this.isAdmit);
    }
      this.httpBaseService.Get(ApiRouts.getUniversities)
        .subscribe(x =>
        {
          var arr = x as University[];
          console.log(x);
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
  getImageOrDefault(university) {
    if (university.imageContents.length === 0) {
      return 'assets/img/university3.png';
    }
    else {
      return 'https://localhost:44304/api/universities/image/' + university.imageContents[0].imageName;
    }
  }
  deleteUniversity(universityId){
    this.httpBaseService.Delete(ApiRouts.getUniversities + "/" + universityId)
      .subscribe(x =>
      {
        console.log(x);
        window.location.reload();

      });
  }
}
