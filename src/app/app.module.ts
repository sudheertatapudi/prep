import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrainsComponent } from './trains/trains.component';
import { BusesComponent } from './buses/buses.component';
import { FlightsComponent } from './flights/flights.component';
import { TrianserviceService } from './trains/trianservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TrainsComponent,
    BusesComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TrianserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
