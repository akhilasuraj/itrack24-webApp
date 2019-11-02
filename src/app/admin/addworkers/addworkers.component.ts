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
        // window.location.reload();
        console.log(data);
      });
  }
}
