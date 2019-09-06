import { Component, OnInit } from '@angular/core';
import { TransferService} from '../notification/transfer.service';
import { NotificationService} from '../notification/notification.service';

@Component({
  selector: 'app-pop-post',
  templateUrl: './pop-post.component.html',
  styleUrls: ['./pop-post.component.css']
})
export class PopPostComponent implements OnInit {

  constructor(private ts:TransferService, private ns: NotificationService) { }

  postdata=this.ts.getData()

  ngOnInit() {
   console.log("this is the relevant data "+ this.postdata);
   this.ns.GetSelectPost(this.postdata).subscribe(
     pdata=>{
       console.log(pdata);
     });
  }

}
