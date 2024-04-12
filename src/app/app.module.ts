//@ts-ignore
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { QRCodeModule } from 'angularx-qrcode';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { ChartComponent } from './Components/chart/chart.component';
import { CardComponent } from './Components/card/card.component';
import { TableComponent } from './Components/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as echarts from 'echarts/core';

const langAR = {
  time: {
    month: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthAbbr: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    dayOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayOfWeekAbbr: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  },
  legend: {
    selector: {
      all: 'تحديد الكل',
      inverse: 'عكس التحديد'
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: 'تحديد صندوقي',
        polygon: 'تحديد حلقي',
        lineX: 'تحديد أفقي',
        lineY: 'تحديد عمودي',
        keep: 'الاحتفاظ بالمحدد',
        clear: 'إلغاء التحديد'
      }
    },
    dataView: {
      title: 'عرض البيانات',
      lang: ['عرض البيانات', 'إغلاق', 'تحديث']
    },
    dataZoom: {
      title: {
        zoom: 'تكبير',
        back: 'استعادة التكبير'
      }
    },
    magicType: {
      title: {
        line: 'خطوط',
        bar: 'أشرطة',
        stack: 'تكديس',
        tiled: 'مربعات'
      }
    },
    restore: {
      title: 'استعادة'
    },
    saveAsImage: {
      title: 'حفظ كملف صورة',
      lang: ['للحفظ كصورة انقر  بالزر الأيمن']
    }
  },
  series: {
    typeNames: {
      pie: 'رسم بياني دائري',
      bar: 'رسم بياني شريطي',
      line: 'رسم بياني خطي',
      scatter: 'نقاط مبعثرة',
      effectScatter: 'نقاط مبعثرة متموجة',
      radar: 'رسم بياني راداري',
      tree: 'شجرة',
      treemap: 'مخطط شجري',
      boxplot: 'مخطط صندوقي',
      candlestick: 'مخطط شمعدان',
      k: 'رسم بياني خطي من النوع K',
      heatmap: 'خريطة حرارية',
      map: 'خريطة',
      parallel: 'خريطة الإحداثيات المتناظرة',
      lines: 'خطوط',
      graph: 'مخطط علائقي',
      sankey: 'مخطط ثعباني',
      funnel: 'مخطط هرمي',
      gauge: 'مقياس',
      pictorialBar: 'مخطط مصوّر',
      themeRiver: 'نمط خريطة النهر',
      sunburst: 'مخطط شمسي',
      custom: 'مخطط مخصص',
      chart: 'مخطط'
    }
  },
  aria: {
    general: {
      withTitle: 'هذا رسم بياني حول "{title}".',
      withoutTitle: 'هذا رسم بياني.'
    },
    series: {
      single: {
        prefix: '',
        withName: ' من النوع {seriesType} اسمه {seriesName}.',
        withoutName: ' من النوع {seriesType}.'
      },
      multiple: {
        prefix: '. يتكون من {seriesCount} سلسلة.',
        withName: ' الـ  {seriesId} هي سلسلة من النوع {seriesType} تستعرض {seriesName}.',
        withoutName: ' الـ {seriesId} هي سلسلة من النوع {seriesType}.',
        separator: {
          middle: '، ',
          end: '. '
        }
      }
    },
    data: {
      allData: 'البيانات هي كالتالي: ',
      partialData: 'أول {displayCnt} عناصر هي: ',
      withName: 'قيمة العنصر {name} هي {value}',
      withoutName: '{value}',
      separator: {
        middle: '، ',
        end: '. '
      }
    }
  }
}

echarts.registerLocale('ar', langAR);

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    QRCodeModule,
    TableModule,
    FontAwesomeModule,
    HttpClientModule,
    InputTextModule,
    TooltipModule,
    FormsModule,
    InputSwitchModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
