import { Component, OnInit } from '@angular/core';
import { MycomplainService } from './mycomplain.service'
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mycomplain',
  templateUrl: './mycomplain.component.html',
  styleUrls: ['./mycomplain.component.css']
})
export class MycomplainComponent implements OnInit {

  MycompData = {
    user_id: 0
  }

  complains;


  constructor(private mc: MycomplainService, private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.MycompData.user_id = this.auth.getUserDetails().id;

    this.mc.getMyComp(this.MycompData).subscribe(
      cpm => {
        this.complains = cpm
        console.log(this.complains);
  });
 
  }

}
