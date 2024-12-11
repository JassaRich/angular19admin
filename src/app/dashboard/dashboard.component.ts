import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent, ApexChart, ApexAxisChartSeries, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' }
  ];
  chartOptions: ApexChart = {
    type: 'bar',
    height: 350
  };

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ];

  xAxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  };
  lineChart = {
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
   
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };
  chart:  ApexChart = {
    type: 'line',
    height: 350
  };
}
