import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Begivenheden} from '../app/begivenheden';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class RuteService {
  private ApiUrl = 'https://localhost:44350/api/rute/';
  constructor(private _http: HttpClient) { }

  CreateRute(object) {
    return this._http.post(this.ApiUrl + "Opret", object);
  }
}
