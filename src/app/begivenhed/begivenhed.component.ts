import { Component, OnInit } from '@angular/core';
import { BegivenhedService } from '../begivenhed.service';
import { Begivenheden } from '../begivenheden';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-begivenhed',
  templateUrl: './begivenhed.component.html',
  styleUrls: ['./begivenhed.component.css']
})
export class BegivenhedComponent implements OnInit {
  

  private message: string;

  begivenheder: object;
  constructor(private service: BegivenhedService) {  }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message)
    this.service.ShowBegivenhed(this.message).subscribe((res: object)=>{
      this.begivenheder = res    
    });
  }

}
