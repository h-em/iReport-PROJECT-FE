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
  service : ReportService;

  constructor(reportService: ReportService) {
    this.service = reportService; 
  }

  ngOnInit() {
    this.setReportsList();
  }

  setReportsList(){
    this.reports = this.service.getReportsList();
  }

/*
  getReportsList(){
    this.reportService.getReportsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(reports => {
      this.reports = reports;
    });
  }*/

}  
