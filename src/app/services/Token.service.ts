import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticatedResponse} from '../Models/AuthenticatedResponse';
import {ApiRouts} from '../constants';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private router: Router, private jwtHelper: JwtHelperService, private http: HttpClient){}

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    // const isRefreshSuccess = this.tryRefreshingTokens(token);
    // if (!isRefreshSuccess) {
    //   this.router.navigate(["login"]);
    // }
    return false;
  }

  private async tryRefreshingTokens(token: string): Promise<boolean> {
    const refreshToken: string = localStorage.getItem('refreshToken');
    if (!token || !refreshToken) {
      return false;
    }

    const credentials = JSON.stringify({ accessToken: token, refreshToken });
    let isRefreshSuccess: boolean;
    const refreshRes = await new Promise<AuthenticatedResponse>((resolve, reject) => {
      this.http.post<AuthenticatedResponse>( ApiRouts.baseUrl + '/token/refresh', credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe({
        next: (res: AuthenticatedResponse) => resolve(res),
        error: (_) => { reject; isRefreshSuccess = false; }
      });
    });
    localStorage.setItem('jwt', refreshRes.token);
    localStorage.setItem('refreshToken', refreshRes.refreshToken);
    isRefreshSuccess = true;
    return isRefreshSuccess;
  }
}
