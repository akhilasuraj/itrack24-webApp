import { Component, OnInit } from '@angular/core';
import { TransferService } from '../notification/transfer.service';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';
import {PopPostService} from './pop-post.service';


@Component({
  selector: 'app-pop-post',
  templateUrl: './pop-post.component.html',
  styleUrls: ['./pop-post.component.css']
})
export class PopPostComponent implements OnInit {

  constructor( private ps: PopPostService,private ns: NotificationService, private route: Router, private ts: TransferService) { }

  postdata = this.ts.getData()

  ngOnInit() {
    this.ps.GetSelectPost(this.postdata).subscribe(
      pdata => {
        console.log(pdata);
        this.route.navigateByUrl('/notification');

      });
  }

}
