import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private route: Router) { }

  public data;

 public setData(value) {
    this.data = value;
    console.log("set data = " + this.data.id);
    return this.data;
  }
 public getData() {
   const temp = this.data
   console.log("temp = " + temp);
   return temp;
 }
}
