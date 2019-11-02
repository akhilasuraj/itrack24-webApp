import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  credential = {
    post_id: 0,
    UserID: 0,
    FirstName: '',
    LastName: '',
    PostContent: '',
    PostTitle: '',
    PostImg: '',
    PostDate: '',
    PostTime: ''
  };

  SelectedFile: File;
  Fileurl: any;

  constructor(private pt: PostService, private route: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.credential.UserID = this.auth.getUserDetails().id;
    this.credential.FirstName = this.auth.getUserDetails().first_name;
    this.credential.LastName = this.auth.getUserDetails().last_name;
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
        this.Fileurl = reader.result;
      };
      console.log(this.Fileurl);
    }
  };

  //SUBMITING_POST
  onFileUpload(event: any) {
    const fd = new FormData();
    fd.append('postImg', this.SelectedFile, this.SelectedFile.name);
    fd.append('PostContent', this.credential.PostContent);
    fd.append('PostTitle', this.credential.PostTitle);
    fd.append('FirstName', this.credential.FirstName);
    fd.append('LastName', this.credential.LastName);
    fd.append('UserID', this.credential.UserID.toString());

    this.pt.makePost(fd).subscribe(
      data=>{
        this.route.navigateByUrl("/home");
      });
  }


}
