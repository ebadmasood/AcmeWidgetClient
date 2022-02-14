import { Component, OnInit } from '@angular/core';
import { ActivityForm } from '../interfaces/ActivityForm';
import { ActivityformService } from '../services/activityform.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateActivityComponent } from '../update-activity/update-activity.component';

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
  displayedColumns: string[] = ['FirstName', 'LastName', 'EmailAddress', 'Activity', 'Comments', 'Actions'];

  constructor(private activityService:ActivityformService, private dialog:MatDialog) { }
  dataSource:any;
  ngOnInit(): void {
    this.activityService.getAll().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<ActivityForm>(data as ActivityForm[]);
    })
  }

  updateActivity(element:any) {
    console.log(JSON.stringify(element));
    var selected = this.activities[element.activity + 1];
    console.log('selected activity:' + this.activities[element.activity]);
    this.dialog.open(UpdateActivityComponent, {
      data: {
        id: element.id,
        firstName: element.firstName,
        lastName :element.lastName,
        emailAddress: element.emailAddress,
        activity: this.activities[element.activity],
        comments: element.comments
      }
    })
  }

}
