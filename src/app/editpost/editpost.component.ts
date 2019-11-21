import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MycomplainService } from '../mycomplain/mycomplain.service';
import { MypostService } from '../mypost/mypost.service';
import { MypostComponent } from '../mypost/mypost.component';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  constructor(private ms: MypostService, private router: Router, private mp: MypostComponent) { }


  credential = {
    id: '',
    FirstName: '',
    LastName: '',
    PostContent: '',
    PostTitle: '',
    PostImg: '',
    PostDate: '',
    PostTime: ''
  };
  
  postinfo={
   id:0
  }
  

  SelectedFile: File;
  Fileurl: any;

  ngOnInit() {
    this.postinfo.id = this.mp.postID.id;
    console.log("this is editing post " + this.postinfo.id);
    this.ms.editPost(this.postinfo).subscribe(
      data => {
        this.credential.FirstName = data.FirstName;
        this.credential.LastName = data.LastName;
        this.credential.PostContent = data.PostContent;
        this.credential.PostTitle = data.PostTitle;
        this.credential.PostImg = data.PostImg;
        console.log(this.credential.PostImg);
      });
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

  onFileUpload(event: any) {

    this.credential.id = this.postinfo.id.toString();
    console.log("this is edit krpu id " + this.credential.id);
    console.log(this.SelectedFile.name);

    const fd = new FormData();
    fd.append('id', this.credential.id);
    fd.append('postImg', this.SelectedFile, this.SelectedFile.name);
    fd.append('PostContent', this.credential.PostContent);
    fd.append('PostTitle', this.credential.PostTitle);


    this.ms.updatePost(fd).subscribe(
      result => {
        this.mp.marked = true;
        window.alert(result.message);
        window.location.reload();
        console.log("post updated");
      });
  };



}
