import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }
  details: UserDetails;

  userData = {
    id: 0
  }

  SelectedFile: File;
  fileUrl;

  tokenid: string;
  first_name: string;
  last_name: string;

  ngOnInit() {

    this.userData.id = this.auth.getUserDetails().id;
    console.log("this is userid " + this.userData.id);
    this.auth.profile(this.userData).subscribe(
      (data) => {
        console.log(this.details);
        this.details = data;
      });

    this.auth.viewPhoto(this.userData).subscribe(
      pic => {
        this.fileUrl = pic;
        console.log("here is the profile image " + pic);
      });

  }

  OnFileSelected(event) {
    this.SelectedFile = event.target.files[0] as File;
  }

  Upload() {
    this.userData.id = this.auth.getUserDetails().id;
    const fd = new FormData();
    fd.append('prophoto', this.SelectedFile, this.SelectedFile.name);

    this.auth.sendUserID(this.userData).subscribe(
      res => { }
    );


    this.auth.uploadPhoto(fd).subscribe(
      res => {
        window.location.reload();
      }
    );
  }

}
