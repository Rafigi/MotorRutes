import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators }   from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private service: UsersService, private router: Router ) {  }

  loginInfo: any;
  errorMessage: string = '';
  connection: boolean = false;

  user: any;
  ngOnInit() {
  }
    profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  login(): void {

    if(this.profileForm.invalid)
    {     
      return;
    }
    else
    {
      this.connection = false;
      this.user = { Username: this.profileForm.get('username').value, Password: this.profileForm.get('password').value};
        this.service.CheckUser(this.user).subscribe((data: any) =>  {
          localStorage.setItem('UserToken', data['token']);
          localStorage.setItem('User', data['username']); 
          //Sender en true, at der er sendt det rigtige password og kode til servicens metode, som er false som standard.
          this.service.SetLoggedIn(true);
          this.router.navigate(['/begivenheder']);     
      }, (err: HttpErrorResponse) =>
      {
        if(err.status == 400)
        {
          this.errorMessage = err.error['message'];
          this.connection = true;
        }
        else
        {
          this.errorMessage = 'Der er ingen forbindelse til serveren.'
          this.connection = true;
        }
      });
    }
  }


  get Username() { return this.profileForm.get('username'); }

  get Password() { return this.profileForm.get('password'); }
}