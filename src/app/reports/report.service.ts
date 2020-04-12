import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private dbPath = '/reports';

  reportRef: AngularFireList<Report> = null;

  constructor(private db: AngularFireDatabase) {
    this.reportRef = db.list(this.dbPath);  
  }

  updateStateOfReport(key: string, value: any): Promise<void> {
    return this.reportRef.update(key, value);
  }

  getReportsList(): AngularFireList<Report> {
    return this.reportRef;
  }


}
