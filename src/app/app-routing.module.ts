import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainsComponent } from './trains/trains.component';
import { FlightsComponent } from './flights/flights.component';
import { BusesComponent } from './buses/buses.component';


const routes: Routes = [
  {
    path: '',
    component: TrainsComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'buses',
    component: BusesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
