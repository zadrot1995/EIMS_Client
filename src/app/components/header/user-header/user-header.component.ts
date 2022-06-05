import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {HttpBaseService} from "../../../services/httpBase.service";
import {TokenService} from "../../../services/Token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  userName = '';
  userImageUrl = '';
  constructor(private jwtHelper: JwtHelperService,
              public tokenStorageService: TokenStorageService,
              private  httpBase: HttpBaseService,
              public tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {

  }
  logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
    this.router.navigate(["/"]);
  }
}
