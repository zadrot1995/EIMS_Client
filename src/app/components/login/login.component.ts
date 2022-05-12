import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthenticatedResponse} from "../../Models/AuthenticatedResponse";
import {ApiRouts} from "../../constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  userName = '';
  password = '';
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {

  }
  login(){
    debugger;
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
            localStorage.setItem("jwt", token);
            this.invalidLogin = false;
            this.router.navigate(["/"]);
          },
          error: (err: HttpErrorResponse) => this.invalidLogin = true
        });

  }
}
