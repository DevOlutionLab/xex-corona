import { Component, OnInit, VERSION, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {GoogleChartComponent} from 'ng2-google-charts';
import {HostListener} from '@angular/core';
import { MapChartService } from '../map-chart.service';
import { MapChartData } from '../mapChartData';


declare var google: any;


@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css'],
})
export class MapChartComponent implements OnInit {

chartData: MapChartData[];
error;
  
  constructor(private mapChartService: MapChartService) {
    // window.addEventListener("resize", this.drawMarkersMap);
  }

  @ViewChild('geoChart') geoChart: ElementRef
      
  drawMarkersMap = () => {
if (google.visualization) {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'code');
  data.addColumn('string', 'name');
  data.addColumn('number', 'cases');
  data.addColumn({role: 'tooltip', p:{html:true}});

this.mapChartService.getCasesPerRegion()
      .subscribe(
        (res: MapChartData[]) => {
          this.chartData = res;
          for (var mapData of this.chartData) {  
            data.addRow([mapData.code, `${mapData.name}: ${mapData.cases} cas`, mapData.cases, mapData.departments]);
          }         
        },
        (err) => {
          this.error = err;
          console.log(this.error);
        }
      )

      const options = {
          region: "SN",
          resolution: "provinces",
          displayMode: "regions",
          colorAxis: {
              colors: ["rgb(119, 236, 119)", "rgb(97, 41, 71)"],
          },
          tooltip: {
            isHtml: true}
      };

      const chart = new google.visualization.GeoChart(
          this.geoChart.nativeElement
      );


      // region click listener
      // google.visualization.events.addListener(chart, 'select', function () {
      //   var selection = chart.getSelection();
      //   if (selection.length > 0) {
      //     console.log(data.getValue(selection[0].row, 1));
      //     //window.open('http://' + data.getValue(selection[0].row, 2), '_blank');
        
      //   }
      // });

      chart.draw(data, options);

    // To redraw chart on window resize for responsiveness
    var windowResizeTimer;
    window.addEventListener('resize', function(e){
      clearTimeout(windowResizeTimer);
      windowResizeTimer = setTimeout(function(){
          chart.draw(data, options);
      }, 750);
    });

}
      
      
  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawMarkersMap);
  }

      ngOnInit(): void {        

        this.drawMarkersMap();   
                
      }
      
}
