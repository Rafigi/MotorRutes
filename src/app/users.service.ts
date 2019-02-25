import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private ApiUrl = 'https://localhost:44350/api/Users/';

  constructor( private _http: HttpClient) {}

  private loggedInStatus = false;

  SetLoggedIn(value: boolean)
  {
    this.loggedInStatus = value;
  }

  get isLoggedIn()
  {
    return this.loggedInStatus;
  }

  CheckUser(object){
    return this._http.post(this.ApiUrl + "authenticate", object);
  }

  CreateUser(object){
    return this._http.post(this.ApiUrl + "Opret", object);
  }
}
