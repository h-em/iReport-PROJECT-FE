import { Component } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iReport';
  
  latitude = 47.63333;
  longitude = 26.25;


  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
