import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { SubContainerComponent } from './components/sub-container/sub-container.component';

@NgModule({
  declarations: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
  ],
  exports: [
    TableComponent,
    TitleComponent,
    ContainerComponent,
    SubContainerComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
