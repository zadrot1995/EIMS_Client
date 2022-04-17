import { Component, OnInit } from '@angular/core';
import {HttpBaseService} from '../../../services/httpBase.service';
import {University} from '../../../Models/University';
import {ApiRouts} from '../../../constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-universities',
  templateUrl: './add-universities.component.html',
  styleUrls: ['./add-universities.component.css']
})
export class AddUniversitiesComponent implements OnInit {

  selectedFile = null;
  university = new University();
  result: object;
  constructor(public httpBaseService: HttpBaseService,
              private router: Router) {}

  addUniversity(){
    this.httpBaseService.Post(this.university, ApiRouts.getUniversities).subscribe(x =>
    {
      console.log(x);
      this.router.navigate(['universities'], {});
    });
  }
  ngOnInit(): void {
  }

}
