import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = 'Mads';
  password: string = '0000';

  constructor(private service: UsersService) {  }

  ngOnInit() {
    this.service.CheckUser(this.username, this.password).subscribe( response => {
      console.log(response);
    });
  }
}
