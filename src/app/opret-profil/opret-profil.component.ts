import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-opret-profil',
  templateUrl: './opret-profil.component.html',
  styleUrls: ['./opret-profil.component.css']
})
export class OpretProfilComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }

  True: boolean = false;
  False: boolean = false;
  username: string;
  password: string;
  mail: string;
  ngOnInit() {
  }

  object = { Username: this.username , Password: this.password, Mail: this.mail};
  
  opret(): void {
    this.service.CreateUser(this.object).subscribe( response => {
      if (response === true) {
        this.True = true;
      }
      this.False = true;
      console.log(response);
    });
  }
}
