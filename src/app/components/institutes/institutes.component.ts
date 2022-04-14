import { Component, OnInit } from '@angular/core';
import {Institute} from '../../Models/Institute';
import {HttpBaseService} from '../../services/httpBase.service';
import {ApiRouts} from '../../constants';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {
  institutes: Institute[];
  constructor(public httpBaseService: HttpBaseService) {}

  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.getInstitutes)
      .subscribe(x =>
      {
        const arr = x as Institute[];
        this.institutes = arr;
      });
  }

}
