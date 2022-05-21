import { Component, OnInit } from '@angular/core';
import {Institute} from '../../../Models/Institute';
import {HttpBaseService} from '../../../services/httpBase.service';
import {ApiRouts} from '../../../constants';
import {DataFormatHelper} from "../../../services/DataFormatHelper";
import {TokenService} from "../../../services/Token.service";

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {
  institutes: Institute[];
  loading = true;
  isAdmit: false;

  constructor(public httpBaseService: HttpBaseService,
              public dataFormatHelper: DataFormatHelper,
              private tokenService: TokenService) {}

  ngOnInit(): void {
    this.isAdmit = this.tokenService.isAdmin();
    this.httpBaseService.Get(ApiRouts.getInstitutes)
      .subscribe(x =>
      {
        const arr = x as Institute[];
        this.institutes = arr;
        this.loading = false;
      });
  }

  deleteInstitute(InstituteId){
    this.httpBaseService.Delete(ApiRouts.getInstitutes + "/" + InstituteId)
      .subscribe(x =>
      {
        console.log(x);
        window.location.reload();

      });
  }

}
