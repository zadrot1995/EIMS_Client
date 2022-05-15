import { Component, OnInit } from '@angular/core';
import {StudentProfile} from "../../../Models/StudentProfile";
import {ApiRouts} from "../../../constants";
import {Student} from "../../../Models/Student";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/Token.service";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {Mark} from "../../../Models/Mark";
import {DataFormatHelper} from "../../../services/DataFormatHelper";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  userProfile: StudentProfile;
  loading = true;
  practicColCount = 0;
  averageMark: number;
  selectedFile = null;


  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private tokenStorageService: TokenStorageService,
              private dataFormatHelper: DataFormatHelper) { }

  ngOnInit(): void {
    this.httpBaseService.Get(ApiRouts.students + '/get-student-profile/' + this.tokenStorageService.getUser().id)
      .subscribe((x) => {
        this.userProfile = x as StudentProfile;
          console.log(x);

          let lenghts = [];
        for (let y of this.userProfile.userJournal.userJournalRows)
        {
          lenghts.push(y.practicMarks.length);
        }

          console.log(x);
          var subjectsCount = 0;
          var marksCount = 0;

          this.practicColCount = Math.max.apply(null, lenghts);
        for (let y of this.userProfile.userJournal.userJournalRows){
          marksCount += y.total;
          subjectsCount += 1;
          if(y.practicMarks.length < this.practicColCount){
            for (let i = y.practicMarks.length; i < this.practicColCount; i++){
              let mark = new Mark();
              mark.value = 0;
              y.practicMarks.push(mark);
            }
          }
        }

        this.loading = false;
          this.averageMark = marksCount / subjectsCount;
          console.log(x);
      },
        error => console.log('oops', error));
  }

}
