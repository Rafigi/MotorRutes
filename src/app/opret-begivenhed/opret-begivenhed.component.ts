import { Component, OnInit } from '@angular/core';
import { BegivenhedService} from '../begivenhed.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-opret-begivenhed',
  templateUrl: './opret-begivenhed.component.html',
  styleUrls: ['./opret-begivenhed.component.css']
})
export class OpretBegivenhedComponent implements OnInit {

  constructor(private service: BegivenhedService) { }
  ngOnInit() { 
  }

  Profiloprettet: boolean = false;
  check: boolean = false; // Hvis true, viser den fejlbeskeden i HTML
  InfoMessage: string = ''; //Info beskeden som skal vises til brugeren

  begivenhed: any; // Indholder begivenhedens info, som skal sendes videre til DB

  OpretBegivnhed = new FormGroup({
    titel: new FormControl('', Validators.required),
    beskrivelse: new FormControl('', Validators.required),
    dato: new FormControl('', Validators.required),
    tid: new FormControl('', Validators.required),
    fk_user: new FormControl('')
  });

  Opret(): void
  {
    if(this.OpretBegivnhed.invalid)
    {     
      return;
    }
    else
    {
      this.check = false; 
      this.begivenhed = { Titel: this.OpretBegivnhed.get('titel').value, Beskrivelse: this.OpretBegivnhed.get('beskrivelse').value, Dato: moment(this.OpretBegivnhed.get('dato').value).format('L'), Tid: this.OpretBegivnhed.get('tid').value, FK_UID: 1, FK_RID: 8 };
      this.service.CreateBegivenhed(this.begivenhed).subscribe((response: any) => {
      this.InfoMessage = response['message'];
      this.check = true;
      this.Profiloprettet = true;
      this.OpretBegivnhed.disable();
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

  get Titel() {return this.OpretBegivnhed.get('titel')};
  get Beskrivelse() {return this.OpretBegivnhed.get('beskrivelse')};
  get Dato() {return this.OpretBegivnhed.get('dato')};
  get Tid() {return this.OpretBegivnhed.get('tid')};




}
