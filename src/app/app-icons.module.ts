import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, Box, LogOut, Cpu, Loader } from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Cpu,
      Home,
      Box,
      LogOut,
      Loader,
    }),
  ],
  exports: [FeatherModule],
})
export class AppIconsModule {}
