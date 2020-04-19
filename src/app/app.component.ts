import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReportService } from '../app/reports/report.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'iReport';
  
 // service: ReportService;

  latitude = 47.63333;
  longitude = 26.25;

  /*constructor(reportService: ReportService) {
    this.service = reportService;
  }*/

 /* onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }*/

  /*setLocation(latitude, longitude){

  }*/
}
