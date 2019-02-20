import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators  }   from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private service: UsersService, private router: Router) {  }

  user: any;

  ngOnInit() {
  }
    profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  login(): void {
    this.user = { Username: this.profileForm.get('username').value, Password: this.profileForm.get('password').value};
    this.service.CheckUser(this.user).subscribe((data: any) => {
    localStorage.setItem('UserToken', data.access_token);
    // Sender en true, at der er sendt det rigtige password og kode til servicens metode, som er false som standard.
    this.service.SetLoggedIn(true);
    this.router.navigate(['/begivenheder']);
  });
  }

  get Username() { return this.profileForm.get('username'); }

  get Password() { return this.profileForm.get('password'); }
}
