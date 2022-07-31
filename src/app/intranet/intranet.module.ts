import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    IntranetRoutingModule,
  ],
})
export class IntranetModule {}
