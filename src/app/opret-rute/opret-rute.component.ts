import { Component, OnInit, Input, NgZone } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ViewChild, ElementRef } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RuteService } from '../rute.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';


@Component({
  selector: 'app-opret-rute',
  templateUrl: './opret-rute.component.html',
  styleUrls: ['./opret-rute.component.css']
})
export class OpretRuteComponent implements OnInit {

  check: boolean;
  infomessage: string;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private service: RuteService) {  }

public lat: any = 0;
public lng: any = 0;
public lat2: any = 0;
public lng2: any = 0;
public origin: any;
public destination: any;
public avoidHighways: boolean;
public km: any;
FuldStartAddresse: any;
FuldSlutAddresse: any;


rute: any; // Indeholder al rute info, som skal videre til DB.


OpretRute = new FormGroup({
  // adresse1: new FormControl('', Validators.required),
  // adresse2: new FormControl('', Validators.required),
  motorvej: new FormControl(false, Validators.required),
  færge: new FormControl(false, Validators.required),
  told: new FormControl(false, Validators.required),
  longitude: new FormControl(''),
  langitude: new FormControl('') 
});

ngOnInit() {
  this.getDirection();
}

Opret(): void {
    if (this.OpretRute.invalid) {
      this.infomessage = "Skriv noget ordenligt";
      this.check = true;
      return;
    } else {
      this.rute = { 
      Origin: this.origin,
      Destination: this.destination,
      FuldStartAdresse: this.FuldStartAddresse,
      FuldSlutAdresse: this.FuldSlutAddresse,
      Motorvej: this.OpretRute.get('motorvej').value,
      Færge: this.OpretRute.get('færge').value,
      Told: this.OpretRute.get('told').value,
      Km: this.km,
      username: localStorage.getItem('User'),
      longitude: this.lng,
      langitude: this.lat
    };
      this.service.CreateRute(this.rute).subscribe((response: any) => {
        this.infomessage = response['message']
        this.check = true
    },
    (err: HttpErrorResponse) => {
      if(err.status == 400) {
        this.infomessage =  err.error['meesage'];
        this.check = false;
      } else {
         this.infomessage = 'Der er ingen forbindelse til serveren' + err.error['meesage'];
         this.check = false;
      }
    });
  }
}
@ViewChild('places') places: GooglePlaceDirective;
@ViewChild('search' ) public searchElement: ElementRef;




getDirection() {
  this.origin = { lat: this.lat, lng: this.lng };
  this.destination = { lat: this.lat2, lng: this.lng2 };
  if ( this.OpretRute.get('motorvej').value === true) {
    this.avoidHighways = true;
  } else {
    this.avoidHighways = false;
  }
  console.log(this.FuldSlutAddresse);
  console.log(this.FuldStartAddresse);
}


    public handleAddressChange(address: Address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.FuldStartAddresse = address.formatted_address;
        this.lng = address.geometry.location.lng();
        this.lat = address.geometry.location.lat();
    }
    public handleAddressChange2(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
      this.FuldSlutAddresse = address.formatted_address;
      this.lng2 = address.geometry.location.lng();
      this.lat2  = address.geometry.location.lat();
  }

}
