import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from '../authentication.service';
import { TransferService} from './transfer.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationComp;
  notificationPost;

  userData = {
    UserID: 0,
    user_id: 0
  }

  postData = {
    id: 0
  }


  constructor(private ts:TransferService, private ns: NotificationService, private auth: AuthenticationService,private route: Router) { }

  ngOnInit() {
    this.userData.UserID = this.auth.getUserDetails().id;
    this.userData.user_id = this.auth.getUserDetails().id;

    this.ns.getOtherPosts(this.userData).subscribe(
      data1 => {
        this.notificationPost = data1;
        console.log(data1);
      });

    this.ns.getOtherComplains(this.userData).subscribe(
      data2 => {
        this.notificationComp = data2;
        console.log(data2);
      });
  }

   public GetValues(id){ //GET_DATA_AND_SEND_TO_POP_COMPONENT_USING_SERVICE_FILE
    this.postData.id=id;
     console.log(this.postData)
    this.ts.setData(this.postData);
   }
}


