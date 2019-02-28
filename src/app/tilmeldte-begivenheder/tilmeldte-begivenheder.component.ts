import { Component, OnInit } from '@angular/core';
import { BegivenhedService } from '../begivenhed.service';

@Component({
  selector: 'app-tilmeldte-begivenheder',
  templateUrl: './tilmeldte-begivenheder.component.html',
  styleUrls: ['./tilmeldte-begivenheder.component.css']
})
export class TilmeldteBegivenhederComponent implements OnInit {

  begivenheder: object[] = [];
  constructor(private service: BegivenhedService) 
  {
    this.GetBegivenheder();

  }
  ngOnInit() {
    
  }

  GetBegivenheder()
  {
    let user: string;
    user = localStorage.getItem('User');
    this.service.GetMineTilmeldte(user).subscribe((data: any[]) => {
      this.begivenheder = data;
      console.log(this.begivenheder);
    });
  }
}
