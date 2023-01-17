import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective,  } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent  {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartPlugins = [DataLabelsPlugin];
 
  public barChartData: ChartData<'bar'> = {

    labels: ['2020', '2021', '2023', '2024', '2025', '2026', '2027'],

    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED5F76' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#F763C4' },
      { data: [0, 44, 2, 44, 6, 40, 20], label: 'Series C'   , backgroundColor: '#D665E0' } ,
    ],
  };
 
  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 

  public randomize(): void {
    this.barChartData.datasets.forEach((bar) => {
      bar.data = bar.data?.map(() => Math.round(Math.random() * 100));
    });
    this.chart?.update();
  }
 
  }




  
