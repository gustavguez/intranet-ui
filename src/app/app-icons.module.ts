import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Home,
  Box,
  LogOut,
  Cpu,
  Edit,
  Trash2,
  Package,
  Folder,
  FileText,
} from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Cpu,
      Home,
      Box,
      LogOut,
      Edit,
      Trash2,
      Package,
      Folder,
      FileText,
    }),
  ],
  exports: [FeatherModule],
})
export class AppIconsModule {}
