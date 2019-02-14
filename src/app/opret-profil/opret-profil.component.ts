import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-opret-profil',
  templateUrl: './opret-profil.component.html',
  styleUrls: ['./opret-profil.component.css']
})
export class OpretProfilComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }

  True: boolean = false;
  False: boolean = false;
  Tomt: boolean = false;
  username: string;
  password: string;
  mail: string;
  object: any;
  ngOnInit() {
  }

  opret(): void {
    if(!this.username || !this.password  || !this.mail){
      this.Tomt = true;
    } else {
      this.Tomt = false;      
      this.object = { Username: this.username , Password: this.password, Mail: this.mail};
      this.service.CreateUser(this.object).subscribe( response => {
        if (response === true) {
          this.True = true;
          this.username = this.password = this.mail = "";
        } else {
          this.False = true;
        }
        console.log(response);
    });
  }
  }
}
