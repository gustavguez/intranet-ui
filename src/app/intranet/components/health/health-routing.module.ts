import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnitsComponent } from './components/units/units.component';

const routes: Routes = [
  {
    path: 'units',
    component: UnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthRoutingModule {}
