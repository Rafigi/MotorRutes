import { Component, OnInit } from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  Logud()
  {
    localStorage.removeItem('LoggedIn'); 
    location.reload();
    this.routes.navigate(['/login']);
  }
}
