import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  UserData = 'userData';
  constructor() { }

  signOut() {
    window.localStorage.clear();
  }

  public saveUser(user: any) {

    window.localStorage.removeItem(this.UserData);
    window.localStorage.setItem(this.UserData, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(this.UserData));
  }
}
