import { Component, OnInit } from '@angular/core';
import {HttpBaseService} from "../../../services/httpBase.service";
import {ApiRouts} from "../../../constants";
import {Institute} from "../../../Models/Institute";
import {AuthenticatedResponse} from "../../../Models/AuthenticatedResponse";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  role = '';

  constructor(private  httpBaseService: HttpBaseService) { }

  ngOnInit(): void {
    this.httpBaseService.Get(ApiRouts.baseUrl + '/auth/getUserRole')
      .subscribe({
        next: (response: any) => {
         this.role = response.userType;
          console.log(this.role);
        }
      });
  }

}
