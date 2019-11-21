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
    id: 0
  }

  completedcompinfo = {
    id: 0,
  }

  ngOnInit() {}

}
