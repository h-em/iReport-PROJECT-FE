import { Component, OnInit } from '@angular/core';
import { ReportService } from '../app/reports/report.service';
import { Report } from 'src/app/model/report';
import { Photo } from './model/photo';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';



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


  form: FormGroup;
  checkboxDataForNewStatus = [
    { id: 100, name: 'done' },
    { id: 200, name: 'in progress' },
  ];                  
 
  //checkboxDataForNewStatus = ["In progress","Done"];
  checkboxDataForInProgressStatus = ["New","Done"];
  checkboxDataForInDoneStatus = ["New","In progress"];

  constructor(reportService: ReportService, private formBuilder: FormBuilder) {
    this.service = reportService;

    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    this.addCheckboxes();
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

  
  private addCheckboxes() {
    this.checkboxDataForNewStatus.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  submit() {
    const selectedStatusIds = this.form.value.orders
      .map((v, i) => (v ? this.checkboxDataForNewStatus[i].id : null))
      .filter(v => v !== null);
    console.log(selectedStatusIds);

  }
}
