import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupContainerComponent } from './popup-container/popup-container.component';

@NgModule({
  declarations: [PopupContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [PopupContainerComponent]
})
export class SharedModule { }
