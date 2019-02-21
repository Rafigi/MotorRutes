import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BegivenhedService {
  private ApiUrl = 'https://localhost:44350/api/Begivenhed/';
  constructor(private _http: HttpClient) { }


  CreateBegivenhed(object){
    return this._http.post(this.ApiUrl + "Opret", object);
  }
}
