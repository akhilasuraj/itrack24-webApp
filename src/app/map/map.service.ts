import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private latitude;
  private longitude;
  private locate;

  constructor() { }

  public updateLocation(latitude, longitude, locate){
    this.latitude = latitude;
    this.longitude = longitude;
    this.locate = locate;
  }

  public getLatitude() {
    return this.latitude;
  }

  public getLongitude() {
    return this.longitude;
  }

  public getLocate() {
    return this.locate;
  }
}