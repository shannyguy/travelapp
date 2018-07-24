import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel App';
  trips = [{title: "Trip to Rome", startDate: Date.now()}, {title: "Trip to Madrid", startDate: Date.now()}];
  newTrip = {title: "", startDate: Date.now()};

  addTrip(trip){
    this.trips.push(trip);
    this.newTrip = {title: "", startDate: Date.now()}
  }
}
