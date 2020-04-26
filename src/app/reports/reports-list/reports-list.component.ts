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

  @Output() onItemClicked = new EventEmitter<{latitude:any, longitude:any}>();
  @Output() onObjectPicked: EventEmitter<any> = new EventEmitter<any>();

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

    var lat = report.latitude;
    var long = report.longitude;
    this.onItemClicked.emit({latitude : lat, longitude : long});

    this.onObjectPicked.emit(report);
  }

}  
