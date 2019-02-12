import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private ApiUrl = 'https://localhost:44350/api/mc';

  constructor( private _http: HttpClient) {}

  getUser(){
    return this._http.get(this.ApiUrl);
  }
}
