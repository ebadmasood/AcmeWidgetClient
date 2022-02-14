import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivityForm } from '../interfaces/ActivityForm';

@Injectable({
  providedIn: 'root'
})
export class ActivityformService {

  baseUrl:string = "https://localhost:44361/api/activitysignup"

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
 }

  createActivity(activity: any) {
    return this.http.post(this.baseUrl, activity);
  }

  updateActivity(id:number, activity:any) {
    return this.http.put(this.baseUrl + '/' + id, activity);
  }
}
