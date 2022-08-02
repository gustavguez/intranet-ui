import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, Box, LogOut, Cpu, Edit } from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Cpu,
      Home,
      Box,
      LogOut,
      Edit,
    }),
  ],
  exports: [FeatherModule],
})
export class AppIconsModule {}
