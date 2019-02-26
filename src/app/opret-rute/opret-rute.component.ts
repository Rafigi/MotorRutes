import { Component, OnInit, Input, NgZone } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ViewChild, ElementRef } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RuteService } from '../rute.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';


@Component({
  selector: 'app-opret-rute',
  templateUrl: './opret-rute.component.html',
  styleUrls: ['./opret-rute.component.css']
})
export class OpretRuteComponent implements OnInit {

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private service: RuteService) {  }

public lat: any = 0;
public lng: any = 0;
public lat2: any = 0;
public lng2: any = 0;
public origin: any;
public destination: any;
public avoidHighways: boolean;
public km: any;

rute: any; // Indeholder al rute info, som skal videre til DB.


OpretRute = new FormGroup({
  adresse1: new FormControl('', Validators.required),
  adresse2: new FormControl('', Validators.required),
  motorvej: new FormControl(false, Validators.required),
  færge: new FormControl(false, Validators.required),
  told: new FormControl(false, Validators.required)
});

ngOnInit() {
  this.getDirection();
}

Opret(): void {
    if (this.OpretRute.invalid) {
      return;
    } else {
      this.rute = { 
      Origin: this.origin, 
      Destination: this.destination,
      FuldStartAdresse: this.OpretRute.get('adresse1').value,
      FuldSlutAdresse: this.OpretRute.get('adresse2').value,
      Motorvej: this.OpretRute.get('motorvej').value,
      Færge: this.OpretRute.get('færge').value,
      Told: this.OpretRute.get('told').value,
      Km: this.km
    };
      this.service.CreateRute(this.rute).subscribe((response: any) => {
        alert('Rute ope');
    },
    (err: HttpErrorResponse) => {
      if(err.status == 400) {
        alert(err.error['meesage']);
      } else {
        alert('Der er ingen forbindelse til serveren');
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
}


    public handleAddressChange(address: Address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.OpretRute.patchValue({
          dest1: address.formatted_address
        });
        this.lng = address.geometry.location.lng();
        this.lat = address.geometry.location.lat();
    }
    public handleAddressChange2(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
      this.OpretRute.patchValue({
        dest2: address.formatted_address
      });
      this.lng2 = address.geometry.location.lng();
      this.lat2  = address.geometry.location.lat();
  }

}
