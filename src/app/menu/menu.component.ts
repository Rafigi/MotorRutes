import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes: Router) { }

  Nav: string;
  nav = false;

  ngOnInit() {
  }

  ngDoCheck()	{
    this.Nav = localStorage.getItem('LoggedIn');
    if (this.Nav === 'true') {
      this.nav = true;
    }
  }

  Logud() {
    localStorage.removeItem('UserToken');
    this.nav = false;
    this.routes.navigate(['/login']);
  }
}
