import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { SubContainerComponent } from './components/sub-container/sub-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { PanelComponent } from './components/panel/panel.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
    PanelComponent,
    PlaceholderComponent,
    LoaderComponent,
    ModalComponent,
    ConfirmComponent,
  ],
  exports: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
    PlaceholderComponent,
    FeatherModule,
    LoaderComponent,
    ModalComponent,
    ConfirmComponent,
  ],
  imports: [CommonModule, FeatherModule],
})
export class SharedModule {}
