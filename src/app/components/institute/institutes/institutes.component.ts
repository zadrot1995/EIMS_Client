import { Component, OnInit } from '@angular/core';
import {Institute} from '../../../Models/Institute';
import {HttpBaseService} from '../../../services/httpBase.service';
import {ApiRouts} from '../../../constants';
import {DataFormatHelper} from "../../../services/DataFormatHelper";

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {
  institutes: Institute[];
  loading = true;
  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper) {}

  ngOnInit(): void {

    this.httpBaseService.Get(ApiRouts.getInstitutes)
      .subscribe(x =>
      {
        const arr = x as Institute[];
        this.institutes = arr;
        this.loading = false;
      });
  }

}
