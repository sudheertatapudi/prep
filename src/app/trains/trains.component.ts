import { Component, OnInit } from '@angular/core';
import { TrianserviceService } from './trianservice.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  trains;
  constructor(private trainService: TrianserviceService) { }

  ngOnInit(): void {
  }

  trainsearch(form){
    
    var fromStation = form.fromStation;
    console.log(fromStation);
    var toStation = form.toStation;
    console.log(toStation);
    var travelDate = form.travelDate;
    console.log(travelDate);
    this.trainService.getTrains(fromStation,toStation,travelDate).subscribe((data: any[])=>{
      console.log(data);
      this.trains = data;
    })  

  }

}
