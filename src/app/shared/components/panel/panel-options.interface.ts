import { TableOptionsModel } from '../table/domain/table-options.model';

export interface PanelOptions {
  title?: string;
  entity?: string;
  endpoint?: string;
  tableOptions?: TableOptionsModel;
}
