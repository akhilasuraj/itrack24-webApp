import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService, TokenPayload } from './post.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  credential: TokenPayload = {
    post_id:0,
    UserID:0,
    FirstName: '',
    LastName: '',
    PostText: '',
    PostImg:'',
    PostDate: '',
    PostTime: ''
  }

  SelectedFile: File
  Fileurl;

  constructor(private pt: PostService, private route: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.credential.UserID = this.auth.getUserDetails().id;
    this.credential.FirstName = this.auth.getUserDetails().first_name;
    this.credential.LastName = this.auth.getUserDetails().last_name;
    
    // this.pt.viewPostImage(this.credential).subscribe(
    //   data=>{
    //     console.log(data);
    //     this.Fileurl=data;
    
  }

  AddText() {
    this.pt.makePost(this.credential).subscribe(
      data => {
        this.route.navigateByUrl('/newsfeed');
        console.log(data);
        console.log('POST_CREATED_SUCCESFULLY');
      });
  }

     OnFileSelected(event){
          
          this.SelectedFile =  event.target.files[0] as File;
          
        }

      async  AddImage(){
          const fd = new FormData();
          fd.append('postImg', this.SelectedFile, this.SelectedFile.name);
          this.pt.uploadPostImage(fd).subscribe(
            res => {
                console.log("your image uploaded")
            });

          window.location.reload();
        }


}
