import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Report } from '../model/report';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private basePath: string = '/reports';
  reports: Observable<any[]>;

  latitude:string = "";
  longitude:string = "";

  constructor(private db: AngularFireDatabase) {
    this.reports = db.list(this.basePath).valueChanges();
  }

  getReportsList(){
    return this.reports;
  }

  setLocation(lat,long){
    //alert(lat + " " + long);

    this.latitude = lat;
    this.longitude = long;
  }

  getLocation(){
    //alert(this.latitude + " " + this.longitude);

    return {
      lat : this.latitude,
      long : this.longitude
    }
  }

}
