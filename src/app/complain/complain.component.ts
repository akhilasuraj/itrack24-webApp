import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplainService} from './complain.service';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})

export class ComplainComponent implements OnInit {

  credential={
    complain_id: 0,
    user_id:0,
    category: '',
    description: '',
    address1: '',
    address2: '',
    district: '',
    date: '',
    time: '',
    longitude:7.564,
    latitude: 6.457
  };
  userData = {
    user_ID: 0
  };
  SelectedFile: File;
  imageUrl: any;

  

  constructor(private ser: ComplainService, private router: Router, private auth: AuthenticationService) { }

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
 onFileUpload(event:any){
 
  const fd = new FormData();
  fd.append('compImg', this.SelectedFile, this.SelectedFile.name);
  fd.append('description', this.credential.description);
  fd.append('category', this.credential.category);
  fd.append('user_id', this.credential.user_id.toString());
  fd.append('address1', this.credential.address1);
  fd.append('address2', this.credential.address2);
  fd.append('district', this.credential.district);
  fd.append('date', this.credential.date);
  fd.append('time', this.credential.time);
  fd.append('longitude', this.credential.longitude.toString());
  fd.append('latitude', this.credential.latitude.toString());

  this.ser.complain(fd).subscribe(
    data=>{
         this.router.navigateByUrl("/home");
    });

}



}


