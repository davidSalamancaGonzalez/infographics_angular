import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donnut-http',
  templateUrl: './donnut-http.component.html',
  styleUrls: ['./donnut-http.component.css']
})
export class DonnutHttpComponent implements OnInit {

  constructor(private graphicService : GraphicsService) { }



  ngOnInit(): void {

    // this.graphicService.getData()
    // .subscribe(data =>{ 

    //   this.doughnutChartData={
    //     labels:Object.keys(data),
    //     datasets:[{data:Object.values(data)}]
    // }})
    
    this.graphicService.getUser()
    .subscribe(({ labels, datasets }) => {
      // console.log(data);
      this.doughnutChartData = { labels, datasets };
    });


  }

// Doughnut


public doughnutChartData: ChartData<'doughnut'> = {

  labels: [],
  datasets: [
    { data: [],
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
