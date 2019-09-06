import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {ChartService} from './chart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  
  signal_count: number;
  garbage_count: number;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = ['Drains','Dengue','Signal post', 'Garbage disposal',];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [40,30],  label: 'Complains' },
  ];
  
  constructor(private cs:ChartService, private route:Router) { }

  async ngOnInit() {
    
    await this.cs.GetCount1().subscribe(
      (data1:number)=>{
        //  this.signal_count=150;
        //  console.log(data1);
        // this.barChartData[0].data.push(this.signal_count);
      });

    await this.cs.GetCount2().subscribe(
      (data2:number)=>{
        // this.garbage_count=76;
        // console.log(this.garbage_count);
        // this.barChartData[0].data.push(this.garbage_count);
      });

  }



 
}
