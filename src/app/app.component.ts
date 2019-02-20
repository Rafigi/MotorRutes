import { Component, OnInit, Input } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public lat: Number = 0;
public lng: Number = 0;
public lat2: Number = 0;
public lng2: Number = 0;

 
public origin: any;
public destination: any;

@ViewChild('places') places: GooglePlaceDirective;
@ViewChild('search' ) public searchElement: ElementRef;
 
ngOnInit() {
  this.getDirection();
}

getDirection() {
  this.origin = { lat: this.lat, lng: this.lng };
  this.destination = { lat: this.lat2, lng: this.lng2 };
}
constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
    public handleAddressChange(address: Address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.lng = address.geometry.location.lng();
        this.lat  = address.geometry.location.lat();
    }
    public handleAddressChange2(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
      this.lng2 = address.geometry.location.lng();
      this.lat2  = address.geometry.location.lat();
  }
}

