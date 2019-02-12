import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  users: any;

  constructor(private service: UsersService) {  }

  ngOnInit() {
    this.service.getUser().subscribe( response => {
      console.log(response);
      this.users = response;
    }); 
  }
}
