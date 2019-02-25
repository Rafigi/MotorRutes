import { Component, OnInit } from '@angular/core';
import { BegivenhedService } from '../begivenhed.service';
import { Begivenheden } from '../begivenheden';

@Component({
  selector: 'app-mine-begivenheder',
  templateUrl: './mine-begivenheder.component.html',
  styleUrls: ['./mine-begivenheder.component.css']
})
export class MineBegivenhederComponent implements OnInit {

  begivenheder: object[] = [];
  constructor(private service: BegivenhedService) 
  {
    let user: string;
    user = localStorage.getItem('User');
    service.GetMine(user).subscribe((data: any[]) => {
      this.begivenheder = data;
    });

  }

  ngOnInit() {
  }

}
