import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes: Router, private service: UsersService) { }

  Nav: string;
  nav = false;
  check = false;

  ngOnInit() {
  }

  ngDoCheck()	{
    this.check = this.service.isLoggedIn;
    if (this.check === true) {
      this.nav = true;
    } else {
      this.nav = false;
    }
  }

  Logud() {
    localStorage.removeItem('UserToken');
    this.service.SetLoggedIn(false);
    this.routes.navigate(['/login']);
  }
}
