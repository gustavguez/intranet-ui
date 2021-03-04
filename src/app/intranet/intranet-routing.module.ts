import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { IntranetComponent } from './intranet.component';

const routes: Routes = [
    {
        path: '',
        component: IntranetComponent,
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'finances',
            loadChildren: () => import('./finances/finances.module').then(m => m.FinancesModule)
          },
          {
            path: 'nutritions',
            loadChildren: () => import('./nutritions/nutritions.module').then(m => m.NutritionsModule)
          },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
