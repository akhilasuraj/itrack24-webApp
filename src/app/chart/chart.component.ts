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
 
  
  Solid_waste_Public_premise: number;
  Tree_Cutting_Debris_Public_premises: number;
  Decaying_Waste_Public: number;
  Drainage_Blockage_Road: number;

  x;
  y;
  z;
  p;

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
  public barChartLabels: Label[] = ['Solid_waste_Public_premise','Tree_Cutting_Debris_Public_premises','Decaying_Waste_Public', 'Drainage_Blockage_Road',];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [],  label: 'Complains' },
  ];
  
  constructor(private cs:ChartService, private route:Router) { }

   ngOnInit() {
    
     this.cs.GetCount1().subscribe(
      (data1: number) => {
        // this.Solid_waste_Public_premise = data1;
        this.x = data1;
        console.log("* "+ data1);
         (this.barChartData[0].data as number[]).push(this.x);
      });

   
     this.cs.GetCount2().subscribe(
      (data2: number) => {
        // this.Tree_Cutting_Debris_Public_premises = data2
        this.y = data2
        console.log("* "+data2);
        (this.barChartData[0].data as number[]).push(this.y);
      });

        
     this.cs.GetCount3().subscribe(
      (data3: number) => {
        this.z = data3;
        // this.Tree_Cutting_Debris_Public_premises = data2
        console.log("* "+data3);
        (this.barChartData[0].data as number[]).push(this.z);
      });

        
     this.cs.GetCount4().subscribe(
      (data4: number) => {
        this.p = data4;
        // this.Tree_Cutting_Debris_Public_premises = data2
        console.log("* "+data4);
        (this.barChartData[0].data as number[]).push(this.p);
      });
  }

 
}
