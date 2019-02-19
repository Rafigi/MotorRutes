import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private service: UsersService, private router: Router) {  }

  Check = false;
  username: string;
  password: string;
  ngOnInit() {
  }

  login(): void {
    this.service.CheckUser(this.username, this.password).subscribe( response => {
      if (response === true) {
        location.reload();
        // Sender en true, at der er sendt det rigtige password og kode til servicens metode, som er false som standard.
        this.service.SetLoggedIn(true);
        this.router.navigate(['/begivenheder']);
      }
      this.Check = true;
      console.log(response);
    });
  }
}
