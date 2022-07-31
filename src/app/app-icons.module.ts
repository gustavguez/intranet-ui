import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, Box, LogOut, Cpu } from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Cpu,
      Home,
      Box,
      LogOut,
    }),
  ],
  exports: [FeatherModule],
})
export class AppIconsModule {}
