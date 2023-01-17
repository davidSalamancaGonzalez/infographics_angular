import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styleUrls: ['./donnut.component.css']
})
export class DonnutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Doughnut

public doughnutChartLabels: string[] = [ 
  'Income', 'Debt', 'Laundry' ];

public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: [ 350, 450, 100 ],
      backgroundColor : ['#6405F0','#0724E3', '#05A0F0'] },
    
  ]
};
public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}
}
