import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseInitComponent } from './database-init/database-init.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatabaseInitComponent],
  imports: [CommonModule, FormsModule],
})
export class DatabaseModule {}
