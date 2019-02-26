import { Component, OnInit } from '@angular/core';
import { BegivenhedService } from '../begivenhed.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-begivenhed',
  templateUrl: './begivenhed.component.html',
  styleUrls: ['./begivenhed.component.css']
})
export class BegivenhedComponent implements OnInit {

  checkTilmeldt: boolean;
  private message: string;
  TilFramelding: object;
  countTilmeldt: number;
  users:object;

  begivenheder: object;
  constructor(private service: BegivenhedService) {  }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message);
    this.service.ShowBegivenhed(this.message).subscribe((res: object)=>{
      this.begivenheder = res;
    });
    this.countTilmelding(this.message);

    this.CheckTilmelding();
    this.ShowTilmeldte();
  }

  countTilmelding(count: string)
  {
    this.service.CountTilmeldte(count).subscribe((data: any) => {
      this.countTilmeldt = data;
    });
  }

  Tilmeld()
  {
    this.TilFramelding = {username: localStorage.getItem('User'), FK_BID: this.message}
    this.service.TilmeldBegivenhed(this.TilFramelding).subscribe((data: any ) => {
    this.checkTilmeldt = true;
    this.countTilmelding(this.message);
    this.ShowTilmeldte()
    });
  }

  Afmeld()
  {
    this.TilFramelding = {username: localStorage.getItem('User'), FK_BID: this.message}
    this.service.AfmeldBegivenhed(this.TilFramelding).subscribe((data: any) => {
      this.checkTilmeldt = false;
      this.countTilmelding(this.message);
      this.ShowTilmeldte();
      });
  }

  CheckTilmelding()
  {
    this.service.CheckTilmelding(localStorage.getItem('User'), this.message).subscribe((data: boolean) => {
      this.checkTilmeldt = data;
    });

  }

  ShowTilmeldte()
  {
    this.service.GetTilmeldteUsername(this.message).subscribe((username: any[]) => {
      this.users = username;
    })
  }
}
