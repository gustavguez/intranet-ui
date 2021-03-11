import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitializeComponent } from './initialize/initialize.component';

@NgModule({
  declarations: [IntranetComponent, DashboardComponent, InitializeComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    AngularFireModule,
    SharedModule,
    CoreModule
  ]
})
export class IntranetModule { }
