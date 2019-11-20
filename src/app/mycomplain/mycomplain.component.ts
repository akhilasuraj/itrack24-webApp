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
    user_id: 0,
    id: 0
  }

  acceptedcomplains;
  editablecomplains;

  constructor(private mc: MycomplainService, private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.MycompData.user_id = this.auth.getUserDetails().id;

    // this.mc.AcceptedMyComp(this.MycompData).subscribe(
    //   cpm => {
    //     this.acceptedcomplains = cpm;
    //     console.log(this.acceptedcomplains);
    //   });

    this.mc.EditableMyComp(this.MycompData).subscribe( //make edit complain
      data => {
        this.editablecomplains = data;
        console.log(this.editablecomplains);
      });
  }

  public delete(id: number) {
    this.MycompData.id = id;
    this.mc.deleteComplain(this.MycompData).subscribe(
      result => {
        window.alert(result.message);
        window.location.reload();
      });
  }


}
