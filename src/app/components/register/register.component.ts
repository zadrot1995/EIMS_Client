import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthenticatedResponse} from "../../Models/AuthenticatedResponse";
import {ApiRouts} from "../../constants";
import {TokenStorageService} from "../../services/TokenStorageService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidLogin: boolean;
  userName = '';
  password = '';
  detailsKey: string;
  role = '';

  constructor(private router: Router, private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {

  }
  login(){
    var snapshot:any = {
      userName: this.userName,
      password: this.password,
      userDetails: this.detailsKey,
      userType: this.role
    };
    debugger;
    this.http.post<AuthenticatedResponse>( ApiRouts.baseUrl +"/auth/register", snapshot, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          const refreshToken = response.refreshToken;
          localStorage.setItem("jwt", token);
          localStorage.setItem("refreshToken", refreshToken);
          this.http.get(ApiRouts.baseUrl + "/auth/getUser").subscribe(x => {
            this.tokenStorageService.saveUser(x);
            this.invalidLogin = false;
            this.router.navigate(["/"]);
          });
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      });

  }
}
