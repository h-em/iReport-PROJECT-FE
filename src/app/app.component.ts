import { Component, OnInit } from '@angular/core';
import { ReportService } from '../app/reports/report.service';
import { Report } from 'src/app/model/report';
import { Photo } from './model/photo';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'iReport';

  latitude = 47.63333;
  longitude = 26.25;

  service: ReportService;
  photo : Photo = { image_url : 'https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png',
                     photo_id : 'photo_id' };
  report: Report = { latitude : '47.63333',
                     longitude : '26.25',
                     status : 'status',
                     current_date : 'current_date',
                     details : 'Wellcome in Suceava!',
                     photo : this.photo,
                     user_id : "user_id",
                     report_id :"report_id"};


  formModal: FormGroup;
  checkboxDataForNewStatus = [
    { id: 100, name: 'done' },
    { id: 200, name: 'in progress' },
  ];

  constructor(reportService: ReportService) {
    this.service = reportService;
  }

  ngOnInit() {
    this.formModal = new FormGroup({
      reportStatus: new FormControl('', Validators.required)
    });
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

  submit() {
    if (this.formModal.invalid) {
      return;
    }

    var status = this.formModal.controls.reportStatus.value;
    var report_id = this.report.report_id;
    var user_id = this.report.user_id;
    this.service.updateStatus(user_id, report_id, status);

    //hide modal on submit click
    this.hideModal();
  }

}
