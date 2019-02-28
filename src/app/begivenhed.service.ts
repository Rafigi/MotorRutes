import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Begivenheden} from '../app/begivenheden';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class BegivenhedService {
  private ApiUrl = 'https://localhost:44350/api/Begivenhed/';
  constructor(private _http: HttpClient) { }
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  GetMineTilmeldte(username: string)
  {
    return this._http.get(this.ApiUrl + "VisMinetilmeldte/" + username);
  }


  GetTilmeldteUsername(id: string)
  {
    return this._http.get(this.ApiUrl + "UserTilmeldte/" + id);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  CountTilmeldte(id: string)
  {
    return this._http.get(this.ApiUrl + "count/" + id);
  }
  TilmeldBegivenhed(object)
  {
    return this._http.post(this.ApiUrl + "tilmeld", object);
  }

  AfmeldBegivenhed(object)
  {
    return this._http.post(this.ApiUrl + "afmeld", object);
  }

  CheckTilmelding(username: string, BID: any)
  {
    return this._http.get(this.ApiUrl + "Check?username="+  username + "&FK_BID=" + BID);
  }


  CreateBegivenhed(object){
    return this._http.post(this.ApiUrl + "Opret", object);
  }

  GetAll(){
    return this._http.get(this.ApiUrl + 'GetAll');
  }

  GetMine(username: string)
  {
    return this._http.get(this.ApiUrl + username)
  }

  ShowBegivenhed(id: any)
  {
    return this._http.get(this.ApiUrl + 'BID/' + id)
  }
}
