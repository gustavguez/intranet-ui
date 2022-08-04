import { TableOptionsModel } from '../table/domain/table-options.model';

export interface PanelOptions {
  title?: string;
  endpoint?: string;
  tableOptions?: TableOptionsModel;
}
