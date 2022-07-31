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

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
    PanelComponent,
    PlaceholderComponent,
  ],
  exports: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
    PlaceholderComponent,
    FeatherModule,
  ],
  imports: [CommonModule, FeatherModule],
})
export class SharedModule {}
