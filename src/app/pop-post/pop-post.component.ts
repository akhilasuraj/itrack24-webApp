import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopPostService } from './pop-post.service';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  selector: 'app-pop-post',
  templateUrl: './pop-post.component.html',
  styleUrls: ['./pop-post.component.css']
})
export class PopPostComponent implements OnInit {

  constructor(private ps: PopPostService, private route: Router, private nc: NotificationComponent) { }

  postinfo = {
    id: 0
  };

  compinfo = {
    id:0
  }

  ngOnInit() {
    this.postinfo.id = this.nc.postData.id;
    console.log("this is " + this.postinfo.id);
    this.ps.GetSelectPost(this.postinfo).subscribe(
      pdata => {
        console.log(pdata);
      });

      this.compinfo.id = this.nc.compData.id;
      console.log("this is " + this.compinfo.id);
      this.ps.GetSelectComplain(this.compinfo).subscribe(
        cdata => {
          console.log(cdata);
        });
  }

  back(){
    this.nc.marked = true
  }
}
