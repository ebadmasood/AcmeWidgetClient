import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivityformService } from '../services/activityform.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private dr:MatDialogRef<UpdateActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:ActivityformService,
    private router:Router) { 
      this.id = data.id;
      this.selected = data.activity;
      console.log('activity: ' + data.activity)
        this.form = fb.group({
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
          emailAddress: [data.emailAddress, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          activity: [data.activity, Validators.required],
          comments: [data.comments, null]
        })
    }

  form: FormGroup;
  id: number;
  selected: number;
  activities: string[] = [
    "Singing",
    "Dancing",
    "Painting"
  ]
  ngOnInit(): void {
  }
  close(){
    this.dr.close();
  }

  save(){
    if (this.form.valid) {
      var val = this.activities.indexOf(this.form.value.activity)
      this.form.value.activity = val + 1;
       this.service.updateActivity(this.id, this.form.value).subscribe((data) => {
          console.log('data:' + data);
          
        });
      this.dr.close();
      this.router.navigate(['/activities']);   
    }
  }

}