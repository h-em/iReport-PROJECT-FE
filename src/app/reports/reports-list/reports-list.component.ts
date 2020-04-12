import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {

  reports: any;


  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReportsList();
  }

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
  }

}  
