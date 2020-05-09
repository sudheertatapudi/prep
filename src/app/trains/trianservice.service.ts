import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrianserviceService {

  apiUrl: string = 'http://localhost:8080/trains';
  trainSearchapiUrl:string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getTrains(from:string,to:string,traveldate:string) {
   this.trainSearchapiUrl=this.apiUrl+"/from/"+from+"/to/"+to+"/date/"+traveldate;
   console.log(this.trainSearchapiUrl);
   return this.http.get(`${this.trainSearchapiUrl}`);
  }

}
