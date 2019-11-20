import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddworkersService} from './addworkers.service';

@Component({
  selector: 'app-addworkers',
  templateUrl: './addworkers.component.html',
  styleUrls: ['./addworkers.component.css']
})
export class AddworkersComponent implements OnInit {
  credential = {
    lasttname: '',
    Nicno: '',
    Contact: '',
    JobType1: '',
    JobType2: '',
    availability: true,
    assignedTo:false

  }

  constructor(private router: Router, private aw:AddworkersService) { }

  ngOnInit() {
     
  }

  
  Register() {
    this.aw.AddWorker(this.credential).subscribe(
      (data) => {
       if(data.message1){
         window.alert(data.message1);
         this.credential.lasttname = "";
         this.credential.Nicno = "";
         this.credential.Contact = "";
         this.credential.JobType1 = "";
         this.credential.JobType2 = "";
       }

       else if(data.message2){
         window.alert(data.message2);
       }
      });
  }
}
