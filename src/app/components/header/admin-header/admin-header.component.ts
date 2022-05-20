import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {HttpBaseService} from "../../../services/httpBase.service";
import {TokenService} from "../../../services/Token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  userName = '';
  userImageUrl = '';
  constructor(private jwtHelper: JwtHelperService,
              private tokenStorageService: TokenStorageService,
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
