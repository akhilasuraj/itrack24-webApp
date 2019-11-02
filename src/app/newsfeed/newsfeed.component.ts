import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsfeedService} from './newsfeed.service';
import { switchMap } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import { Subscription, timer, pipe } from 'rxjs';



@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
postdata;
subcription1;
  constructor(private nf:NewsfeedService, private route: Router) {}

  ngOnInit() {
   this.nf.getPost().subscribe(
        result=>{
          this.postdata=result;
         console.log(this.postdata);
        }); 
  
  }


}
