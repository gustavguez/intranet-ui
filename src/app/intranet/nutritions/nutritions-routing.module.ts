import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeekPlanningComponent } from './week-planning/week-planning.component';

const routes: Routes = [
    {
        path: '',
        component: WeekPlanningComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionsRoutingModule { }
