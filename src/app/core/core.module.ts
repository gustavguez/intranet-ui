import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent],
  imports: [CommonModule, FeatherModule, RouterModule],
})
export class CoreModule {}
