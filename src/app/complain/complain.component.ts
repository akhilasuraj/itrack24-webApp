import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplainService } from './complain.service';
import { AuthenticationService } from '../authentication.service';
import { MapService } from '../map/map.service';



@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})

export class ComplainComponent implements OnInit {

  credential = {
    complain_id: 0,
    user_id: 0,
    category: '',
    description: '',
    date: '',
    time: '',
    location:'',
    longitude: 7.564,
    latitude: 6.457
  };
  userData = {
    user_ID: 0
  };
  SelectedFile: File;
  imageUrl: any;

  lat;
  long;


  constructor(private ser: ComplainService, private router: Router, private auth: AuthenticationService, private mapService: MapService) { }

  ngOnInit() {
    this.credential.user_id = this.auth.getUserDetails().id;
    this.userData.user_ID = this.auth.getUserDetails().id;
    
  }

  OnFileSelected(event: {
    target: { files: Blob[]; };
  }) {
    console.log(event);

    this.SelectedFile = event.target.files[0] as File;
    if (event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imageUrl = reader.result;
      };
      console.log(this.imageUrl);
    }
  };

  //SUBMITTING_COMPLAIN
  async onFileUpload(event: any) {
    console.log("this is lat from complain component " + this.mapService.getLatitude());
    this.credential.latitude = this.mapService.getLatitude();
    this.credential.longitude = this.mapService.getLongitude();
    this.credential.location = this.mapService.getLocate();
    console.log("this is location "+ this.credential.location  );

    const fd = new FormData();
    fd.append('compImg', this.SelectedFile, this.SelectedFile.name);
    fd.append('description', this.credential.description);
    fd.append('category', this.credential.category);
    fd.append('user_id', this.credential.user_id.toString());
    fd.append('date', this.credential.date);
    fd.append('time', this.credential.time);
    fd.append('location', this.credential.location);
    fd.append('longitude', this.credential.longitude.toString());
    fd.append('latitude', this.credential.latitude.toString());

    await this.ser.complain(fd).subscribe(
      data => {
        if (data.message) {
          this.router.navigateByUrl("/home");
          window.alert(data.message);

        }
      });

  }



}


