import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { TableActionArgument } from './domain/table-action.argument';
import { TableActionModel } from './domain/table-action.model';
import { TableOptionsModel } from './domain/table-options.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  // Inputs
  @Input() options: TableOptionsModel = {};
  @Input() items: any[] = [];
  @Input() customTdTpl: TemplateRef<any> | null = null;

  // Output
  @Output() onAction: EventEmitter<TableActionArgument> = new EventEmitter();

  // Custom events
  onActionClick(action: TableActionModel, model: any): void {
    this.onAction.emit(new TableActionArgument(action, model));
  }
}
