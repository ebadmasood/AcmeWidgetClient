import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

//components

import { ActivitiesComponent } from "./activities/activities.component";
import { NewActivityComponent } from "./new-activity/new-activity.component";


//route

const routes:Routes = [
    {path:'', component:ActivitiesComponent},
    {path:'activities',component:ActivitiesComponent},
    {path: 'activity', component:NewActivityComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule {}