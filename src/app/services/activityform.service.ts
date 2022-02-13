import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActivityformService {

  baseUrl:string = "https://localhost:44361/api/activitysignup"

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
 }

  createEntry(entry: any) {
    return this.http.post(this.baseUrl, entry);
  }

  updateEntry(id:number, entry:any) {
    return this.http.put(this.baseUrl + '/' + id, entry);
  }
}
