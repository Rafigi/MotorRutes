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

<<<<<<< HEAD
=======
public lat: Number = 0;
public lng: Number = 0;
public lat2: Number = 0;
public lng2: Number = 0;

 
public origin: any;
public destination: any;
>>>>>>> DelevopmentBranch

}

