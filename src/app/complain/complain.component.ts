import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplainService, TokenPayload } from './complain.service';
import { AuthenticationService } from '../authentication.service';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})

export class ComplainComponent implements OnInit {

  credential: TokenPayload = {
    complain_id: 0,
    user_id: 0,
    category: '',
    description: '',
    address1: '',
    address2: '',
    district: '',
    date: '',
    time: '',
    longitude: 6.795350,
    latitude: 79.900808
  };
  userData = {
    user_ID: 0
  };
  SelectedFile: File;
  fileUrl;



  constructor(private ser: ComplainService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {

    this.credential.user_id = this.auth.getUserDetails().id;
    this.userData.user_ID = this.auth.getUserDetails().id;
    //  this.ser.viewPhoto(this.userData).subscribe(
    //     result => {
    //       this.fileUrl = result;
    //     }
    // );
  }

 async MakeComplain() {//complain kiyne service eken ewna function eka//
    this.ser.complain(this.credential).subscribe(
      data => {
        this.router.navigateByUrl('/');
        if (data) {
          console.log(data);
        }

      }
    )
  }


  OnFileSelected(event) {
    this.SelectedFile = event.target.files[0] as File;
  }

 async Upload() {
    const fd = new FormData();
    fd.append('compImg', this.SelectedFile, this.SelectedFile.name);
    this.ser.uploadPhoto(fd).subscribe(
      res => {

      }
    );

    window.location.reload();
  }

}
