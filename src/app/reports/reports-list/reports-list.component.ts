import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReportService } from '../report.service';
import { Observable } from 'rxjs';
import { Report } from 'src/app/model/report';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {


  //mine 
  reports: Observable<any[]>;
  service: ReportService;

  @Output() valueChange = new EventEmitter<{latitude:any, longitude:any}>();
  //@Output() valueChange = new EventEmitter<{report:Report}>();

  constructor(reportService: ReportService) {
    this.service = reportService;
  }

  ngOnInit() {
    this.setReportsList();
  }
  // from db
  setReportsList() {
    this.reports = this.service.getReportsList();
  }

  getLocationFromItem(report){
    //alert(latitude+ " "+ longitude);
    var lat = report.latitude;
    var long = report.longitude;
    this.valueChange.emit({latitude : lat, longitude : long});
    //this.valueChange.emit({report:report});
  }

}  
