import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';

@NgModule({
  declarations: [IntranetComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    CoreModule
  ]
})
export class IntranetModule { }
