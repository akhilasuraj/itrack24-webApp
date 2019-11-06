import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PiChartService } from './pi-chart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.css']
})
export class PiChartComponent implements OnInit {

  constructor(private pcs: PiChartService, private route: Router) { }

  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
  }

  pieChartLabels = ['Mosquito breeding area-Public', 'Mosquito breeding area-Private'];


  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ]

  pieChartData: any = [
    {
      data: []
    }
  ];

  ngOnInit() {
    this.pcs.GetCountA().subscribe(
      (dataA) => {
        console.log( dataA+" Mosquito breeding area-Public");
        (this.pieChartData[0].data as any[]).push(dataA);
      });


    this.pcs.GetCountB().subscribe(
      (dataB) => { 
        console.log( dataB+" Mosquito breeding area-Private");
       (this.pieChartData[0].data as any[]).push(dataB);
      });

  }

onChartClick(event) {
  console.log(event);
}

}


