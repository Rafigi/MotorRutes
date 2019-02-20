import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ConfirmPasswordValidator } from '../confirm-password.validator';


@Component({
  selector: 'app-opret-profil',
  templateUrl: './opret-profil.component.html',
  styleUrls: ['./opret-profil.component.css']
})
export class OpretProfilComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }


  Profiloprettet: boolean = false;
  check: boolean = false;
  InfoMessage: string = '';

  OpretProfil = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  User: any;
  ngOnInit() {
  }

  Opret(): void {
      if(this.OpretProfil.invalid)
      {
        return;
      }
      else
      {
        this.check = false;
        this.User = { Username: this.OpretProfil.get('username').value, Password: this.OpretProfil.get('password').value, mail: this.OpretProfil.get('email').value};
        this.service.CreateUser(this.User).subscribe((response:any) => {
          this.InfoMessage = response['message'];
          this.check = true;
          this.Profiloprettet = true;
          this.OpretProfil.disable();
      },
      (err: HttpErrorResponse) =>
      {
        if(err.status == 400)
        {
          this.InfoMessage = err.error['message'];
          this.check = true;
        }
        else
        {
          this.InfoMessage = 'Der er ingen forbindelse til serveren.'
          this.check = true;
        }
      });
    }
  }

  get Username() { return this.OpretProfil.get('username'); }
  get Password() { return this.OpretProfil.get('password'); }
  get Email() { return this.OpretProfil.get('email'); }
  
}
