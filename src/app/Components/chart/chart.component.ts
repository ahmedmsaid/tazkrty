import { Component, OnInit, ViewChild } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { EChartsOption, graphic } from 'echarts'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: any;
  gradientColors = [{ offset: 0, color: '#8a74f9' }, { offset: 1, color: '#ffffff' }];
  chartData:any = [
    { month: 'ديسمبر', usageCount: 75, usagePercentage: 3 },
    { month: 'نوفمبر', usageCount: 100, usagePercentage: 2.8},
    { month: 'أكتوبر', usageCount: 50, usagePercentage: 1.6 },
    { month: 'سبتمبر', usageCount: 120, usagePercentage: 1.3 },
    { month: 'أغسطس', usageCount: 220, usagePercentage: 1.6 },
    { month: 'يوليو', usageCount: 150, usagePercentage: 1.6 },
    { month: 'يونيو', usageCount: 200, usagePercentage: 1.6 },
    { month: 'مايو', usageCount: 160, usagePercentage: 1.6 },
    { month: 'إبريل', usageCount: 150, usagePercentage: 1.6 },
    { month: 'مارس', usageCount: 120, usagePercentage: 1.6 },
    { month: 'فبراير', usageCount: 50, usagePercentage: 1.6 },
    { month: 'يناير', usageCount: 100, usagePercentage: 1.6 },
    // ... data for other months
  ];

  chartOption: EChartsOption = {
    title: {
      text: 'احصائيات استخدام القسيمة',
      textStyle: {
        color: '#1C1C28',
        fontWeight: 450,
        opacity: 0.9
      },
      left: 'right',
      padding: [20,100],
      subtext: '05 يوليو , 2023 - 05 أغسطس , 2023',
      subtextStyle: {
       color: '#99A1B7',
       fontSize: 18
      }
    },
    xAxis: {
      type: 'category',
      data:  this.chartData.map((item:any) => item.month),
      //['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو','إبريل', 'مارس', 'فبراير', 'يناير'],
      axisPointer: {
        snap: true,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#9291A5',
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 30,
        interval: 0,
      },
      axisTick: {
        show: false
      }  
    },
    yAxis: {
      show: true,
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        data: this.chartData.map((item:any) => item.usageCount),
        symbolSize: 20,
        showSymbol: false,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, this.gradientColors , false),
          opacity: 0.6
        }
      },
    ],
    textStyle: {
      fontFamily: 'Neo Sans Arabic',
      fontSize: 20,
    },
    tooltip: {
      show: true,
      position: 'left',
      backgroundColor: '#1E1B39',
      borderRadius: 5,
      textStyle: {
        color: '#fff'
      },
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: '#8A74F9',
          width: 2,
          type: 'solid'
        },
      }
    },
    locale: 'ar'
  };
  
  ngOnInit() {}
}
