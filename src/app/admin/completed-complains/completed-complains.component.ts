import { Component, OnInit } from '@angular/core';
import { ApprovedComplainService } from '../approved-complain/approved-complain.service';

@Component({
  selector: 'app-completed-complains',
  templateUrl: './completed-complains.component.html',
  styleUrls: ['./completed-complains.component.css']
})
export class CompletedComplainsComponent implements OnInit {

  comp;

  constructor(private as:ApprovedComplainService) { }

  ngOnInit() {
    this.as.completedcomplains().subscribe(
    (data)=>{
      this.comp = data;
      console.log(this.comp);
    });
  }

}
