import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private service: UsersService) {  }

  ngOnInit() {
  }


  Sumbit()
  {  this.service.CheckUser(this.username, this.password).subscribe( response => {
      console.log(response);
    });
  }
}
