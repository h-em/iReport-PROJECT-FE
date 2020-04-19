import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {


  //mine 
  reports: Observable<any[]>;
  service: ReportService;


  constructor(reportService: ReportService) {
    this.service = reportService;
  }

  ngOnInit() {
    this.setReportsList();
  }

  setReportsList() {
    this.reports = this.service.getReportsList();
  }

  getLocation(event, latitude, longitude){
    alert(latitude + " " + longitude);
    this.service.setLocation(latitude, longitude);
  }

}  
