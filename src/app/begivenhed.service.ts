import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Begivenheden} from '../app/begivenheden';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BegivenhedService {
  private ApiUrl = 'https://localhost:44350/api/Begivenhed/';
  constructor(private _http: HttpClient) { }


  CreateBegivenhed(object){
    return this._http.post(this.ApiUrl + "Opret", object);
  }

  GetAll(){
    return this._http.get(this.ApiUrl + 'GetAll');
  }
}
