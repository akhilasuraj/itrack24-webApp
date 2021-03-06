import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  title: string = "GoogleMaps";
  latitude: number;
  longitude: number;
  locate: string;
  zoom: number;
  address: string;
  private geoCoder;


  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapService: MapService

  ) { }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place.formatted_address); //this is the search addres as formatted
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.locate = place.formatted_address;
          this.zoom = 12;
          console.log("Zoom longitude from map component" + this.longitude);
          console.log("Zoom latitude from map component" + this.latitude);

          // Update location data in map service
          this.mapService.updateLocation(this.latitude, this.longitude, this.locate);

        });
      });
    });
  }




  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.locate = this.address;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude, this.locate);

        // Update location data in map service
        this.mapService.updateLocation(this.latitude, this.longitude, this.locate);

      });
    }
  }



  async markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.locate = this.address;
    await this.getAddress(this.latitude, this.longitude, this.locate);

    // Update location data in map service

   await this.mapService.updateLocation(this.latitude, this.longitude, this.locate);
  }

  getAddress(latitude, longitude, address) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log("drgged address is " + this.locate)
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}