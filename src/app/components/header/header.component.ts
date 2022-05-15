import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../services/TokenStorageService";
import {HttpBaseService} from "../../services/httpBase.service";
import {ApiRouts} from "../../constants";
import {TokenService} from "../../services/Token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = '';
  userImageUrl = '';
  constructor(private jwtHelper: JwtHelperService,
              private tokenStorageService: TokenStorageService,
              private  httpBase: HttpBaseService,
              private tokenService: TokenService) { }

  ngOnInit(): void {

  }
  getUserData(){
    if (this.tokenService.isUserAuthenticated()){
      if (this.tokenStorageService.getUser() == null) {
        this.httpBase.Get(ApiRouts.baseUrl + "/auth/getUser").subscribe(x => {
          this.tokenStorageService.saveUser(x);
        });
      }
      else {
        this.userName = this.tokenStorageService.getUser().userName;
      }
    }
    return this.userName;
  }

}
