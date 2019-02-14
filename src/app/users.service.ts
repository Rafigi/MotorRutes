import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private ApiUrl = 'https://localhost:44350/api/mc/';

  constructor( private _http: HttpClient) {}

  CheckUser(username: string, password: string ){
    return this._http.get(this.ApiUrl + 'User?' + 'username=' + username + '&password=' + password);
  }

  CreateUser(object){
    return this._http.post(this.ApiUrl, object);
  }
}
