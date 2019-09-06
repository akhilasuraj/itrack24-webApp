import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsfeedService} from './newsfeed.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
postdata;
  constructor(private nf:NewsfeedService, private route: Router) {}

  ngOnInit() {
     
    this.nf.getPost().subscribe(
      result=>{
        this.postdata=result;
       console.log(this.postdata);
      })
  }


}
