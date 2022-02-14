import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityForm } from '../interfaces/ActivityForm';
import { ActivityformService } from '../services/activityform.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  constructor(private activityformService:ActivityformService) { }
  activities: string[] = [
    "Singing",
    "Dancing",
    "Painting"
  ]

  activityForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    emailAddress: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    activity: new FormControl('', Validators.required),
    comments: new FormControl('', null)
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.activityForm.value);
    var val = this.activities.indexOf(this.activityForm.value.activity)
    var activityFormData = { 
      firstName : this.activityForm.value.firstName, 
      lastName : this.activityForm.value.lastName,
      emailAddress : this.activityForm.value.emailAddress,
      activity : val + 1,
      comments : this.activityForm.value.comments
     }
     console.log('data to be created' + JSON.stringify(activityFormData));
    this.activityformService.createActivity(activityFormData).subscribe((data) => {
      console.log('data - ' + data);
    })
  }

}
