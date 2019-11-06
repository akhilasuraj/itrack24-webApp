import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private latitude;
  private longitude;

  constructor() { }

  public updateLocation(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public getLatitude() {
    return this.latitude;
  }

  public getLongitude() {
    return this.longitude;
  }
}