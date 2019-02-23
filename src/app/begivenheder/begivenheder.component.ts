import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BegivenhedService } from '../begivenhed.service';
import { Begivenheden } from '../begivenheden';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-begivenheder',
  templateUrl: './begivenheder.component.html',
  styleUrls: ['./begivenheder.component.css']
})
export class BegivenhederComponent implements OnInit {

  begivenheder: Begivenheden[] = [];
  constructor(private service: BegivenhedService) {
    this.service.GetAll().subscribe((res: Begivenheden[])=>{
      this.begivenheder = res;
    });
   }
  
  ngOnInit() {
    
  }

  //Forms til søgning
  search = new FormGroup({
    startAdresse: new FormControl(''),
    slutAdresse: new FormControl(''),
    bruger: new FormControl(''),
    dato: new FormControl(''),
    tid: new FormControl('')
  });


  Searching(): void
  {
    if(this.Bruger !== '' )
    {
     
    }


  }

  //Get for søgning indhold.
  get StartAdresse() {return this.search.get('startAdresse').value};
  get SlutAdresse() {return this.search.get('slutAdresse').value};
  get Bruger() {return this.search.get('bruger').value};
  get Dato() {return this.search.get('dato').value}
  get Tid() {return this.search.get('tid').value};


}
