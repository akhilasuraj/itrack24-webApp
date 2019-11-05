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
    user_ID: 0
  };
  SelectedFile: File;
  fileUrl;

  tokenid: string;

  ngOnInit() {

    this.userData.user_ID = this.auth.getUserDetails().id;

    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
      },
      err => {
        console.error(err)
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
    this.userData.user_ID = this.auth.getUserDetails().id;
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
