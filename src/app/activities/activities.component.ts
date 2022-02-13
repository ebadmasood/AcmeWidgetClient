import { Component, OnInit } from '@angular/core';
import { ActivityForm } from '../interfaces/ActivityForm';
import { ActivityformService } from '../services/activityform.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: string[] = [
    "None",
    "Singing",
    "Dancing",
    "Painting"
  ]
  displayedColumns: string[] = ['FirstName', 'LastName', 'EmailAddress', 'Activity', 'Comments'];
  constructor(private activityService:ActivityformService) { }
  dataSource:any;
  ngOnInit(): void {
    this.activityService.getAll().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<ActivityForm>(data as ActivityForm[]);
    })
  }

}
