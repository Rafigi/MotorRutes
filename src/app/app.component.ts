import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public lat: Number = 24.799448;
public lng: Number = 120.979021;
 
public origin: any;
public destination: any;
 
ngOnInit() {
  this.getDirection();
}

getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 };
  this.destination = { lat: 24.799524, lng: 120.975017 };
}}

