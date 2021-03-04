import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [IntranetComponent, DashboardComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class IntranetModule { }
