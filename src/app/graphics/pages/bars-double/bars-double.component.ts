import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styleUrls: ['./bars-double.component.css']
})
export class BarsDoubleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];

  providersData: ChartData<'bar'> = {
    labels: this.labelsData,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Seller A' },
      { data: [50, 250, 30, 450, 200], label: 'Seller B' }
    ]
  };

  productData: ChartData<'bar'> = {
    labels: this.labelsData,
    datasets: [
      { data: [200, 300, 400, 300, 100], label: 'Cars', }
    ]
  };

}
