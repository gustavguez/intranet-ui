import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseInitComponent } from './database/database-init/database-init.component';

const routes: Routes = [
  {
    path: 'database/init',
    component: DatabaseInitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
