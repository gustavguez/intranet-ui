import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupContainerComponent } from './popup-container/popup-container.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageContainerComponent } from './page-container/page-container.component';

@NgModule({
  declarations: [
    PopupContainerComponent, 
    PageHeaderComponent, 
    PageContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupContainerComponent, 
    PageHeaderComponent, 
    PageContainerComponent
  ]
})
export class SharedModule { }
