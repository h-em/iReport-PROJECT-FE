import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private basePath: string = '/reports';
  reports: Observable<any[]>;

  latitude;
  longitude;

  constructor(private firebase: AngularFireDatabase) {
    this.reports = firebase.list(this.basePath).valueChanges();
  }

  getReportsList(){
    return this.reports;
  }

  setLocation(lat, long){
    this.latitude = lat;
    this.longitude = long;
  }

  getLocation(){
      var x = this.latitude;
      var y = this.longitude;
      return {x,y};
  }

  updateStatus(userId, reportId, status){

    var updatesInReports={};
    updatesInReports['/reports/' + reportId + '/status'] = status;
    firebase.database().ref().update(updatesInReports);

    var updatesInUserReports={};
    updatesInUserReports['/user_reports/' + '/' +userId +'/'+ reportId + '/status'] = status;
    firebase.database().ref().update(updatesInUserReports);

  }

}
