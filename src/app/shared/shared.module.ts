import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { SubContainerComponent } from './components/sub-container/sub-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
    PanelComponent,
  ],
  exports: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
    AlertComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
