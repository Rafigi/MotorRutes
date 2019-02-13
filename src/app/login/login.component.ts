import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from "@angular/router"  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) {  }

username = '';
password = '';
  ngOnInit() {
  }

  login(user: string, pass: string): void {
    this.username = user;
    this.password = pass;
    this.service.CheckUser(this.username, this.password).subscribe( response => {
      if(response = true) {
        this.router.navigate(['/begivenheder']);
      }
      console.log(response);
    });
  }
}
