import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReportService } from '../report.service';
import { Observable } from 'rxjs';

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

  getLocationFromItem(latitude, longitude ){
    //alert(latitude+ " "+ longitude);
    this.valueChange.emit({latitude : latitude, longitude : longitude});
  }

}  
