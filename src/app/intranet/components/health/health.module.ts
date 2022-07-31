import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { UnitsComponent } from './components/units/units.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UnitsComponent],
  imports: [CommonModule, HealthRoutingModule, SharedModule],
})
export class HealthModule {}
