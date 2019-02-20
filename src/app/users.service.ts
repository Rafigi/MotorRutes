import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private ApiUrl = 'https://localhost:44350/api/mc/';
private ApiUrlUser = 'https://localhost:44350/api/Users/authenticate';

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
    return this._http.post(this.ApiUrlUser, object);
  }

  CreateUser(object){
    return this._http.post(this.ApiUrl, object);
  }
}
