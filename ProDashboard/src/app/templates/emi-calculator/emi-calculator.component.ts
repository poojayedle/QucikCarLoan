import { Component,OnInit } from '@angular/core';

import *as Highcharts from 'highcharts'


@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit{

  principalAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;
  totalInterestPayable: number;
  showResult: boolean = false;
  chartOptions: any;

  constructor() {
    this.showResult = false;
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'EMI Breakup'
      },
      xAxis: {
        categories: ['Principal', 'Interest', 'Total Amount'],
        labels: {
          style: {
            fontSize: '14px'
          },
          x: 0, // adjust label position to align with center of bars
          y: 50 // adjust label position to align with center of bars

          // items: [{
          //   text: 'Principal',
          //   x: -30,
          //   y: 50
          // }, {
          //   text: 'Interest',
          //   x: 0,
          //   y: 50
          // }, {
          //   text: 'Total Payable Amount',
          //   x: 10,
          //   y: 50
          // }]
        }
      },
      yAxis: {
        title: {
          text: 'Amount'
        }
      },
      plotOptions: {
        column: {
          colorByPoint: true,
          colors: ['#7cb5ec', '#434348', '#90ed7d'],
          pointPadding: 0.5, // set the padding between bars
          borderWidth: 0, // remove the border around bars
          pointWidth: 50 // set the thickness of the bars
        }
      },
      series: [
        {
          name: 'PRI',
          data: [],
          color: '#7cb5ec' // Set color for this series
        },
        {
          name: 'INT',
          data: [],
          color: '#434348' // Set color for this series
        },
        {
          name: 'TPM',
          data: [],
          color: '#90ed7d' // Set color for this series
        }
      ],
    };
  }

  calculateEMI() {
    let monthlyInterestRate = this.interestRate / 1200;
    let denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.loanTenure);
    this.emi = this.principalAmount * monthlyInterestRate / denominator;
    this.totalInterestPayable = this.emi * this.loanTenure - this.principalAmount;
    this.showResult = true;
    this.chartOptions.series[0].data = [this.principalAmount, 0, 0];
    this.chartOptions.series[1].data = [0, this.totalInterestPayable, 0];
    this.chartOptions.series[2].data = [0, 0, this.emi*this.loanTenure];
    Highcharts.chart('chart', this.chartOptions);
  }

  reloadcalculator(){
    window.location.reload();
  }

}
