import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReportService } from '../app/reports/report.service';
import { Report } from 'src/app/model/report';
import { Photo } from './model/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'iReport';

  latitude = 47.63333;
  longitude = 26.25;

  service: ReportService;
  photo : Photo = { image_url : 'image_url',
                     photo_id : 'photo_id' };
  report: Report = { latitude : '47.63333',
                     longitude : '26.25',
                     status : 'status',
                     current_date : 'current_date',
                     details : 'Wellcome in Suceava!',
                     photo : this.photo,
                     user_id : "user_id"};



  constructor(reportService: ReportService) {
    this.service = reportService;
  }

  onReportListEvent(event, report){
    this.latitude = event.latitude;
    this.longitude = event.longitude;
    this.report = report;

    console.log(report);
  }

  setReport(event){
    console.log(event);
    this.report = event;
  }


  displayModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    //display the modal
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  // When the user clicks on <span> (x), close the modal
  hideModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}
