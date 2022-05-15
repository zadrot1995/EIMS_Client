import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthenticatedResponse} from "../../Models/AuthenticatedResponse";
import {ApiRouts} from "../../constants";
import {TokenStorageService} from "../../services/TokenStorageService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  userName = '';
  password = '';
  loading = false;


  constructor(private router: Router, private http: HttpClient, private tokenStorageService: TokenStorageService ) { }
  ngOnInit(): void {

  }
  login(){
    this.loading = true;
    var snapshot:any = {
      userName: this.userName,
      password: this.password
    };
      this.http.post<AuthenticatedResponse>( ApiRouts.baseUrl +"/auth/login", snapshot, {
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
          },
          error: (err: HttpErrorResponse) => this.invalidLogin = true
        });

  }
}
