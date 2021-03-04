import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NutritionsRoutingModule } from './nutritions-routing.module';
import { WeekPlanningComponent } from './week-planning/week-planning.component';

@NgModule({
  declarations: [WeekPlanningComponent],
  imports: [
    CommonModule,
    SharedModule,
    NutritionsRoutingModule
  ]
})
export class NutritionsModule { }
