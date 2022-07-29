import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, Box } from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Home,
      Box,
    }),
  ],
  exports: [FeatherModule],
})
export class AppIconsModule {}
