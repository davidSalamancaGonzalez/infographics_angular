import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective, } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'
@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.css']
})
export class GraphicBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;

    }
  }


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;


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
