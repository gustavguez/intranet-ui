import { TableOptionsModel } from '../table/domain/table-options.model';
import { PanelRemoteDependency } from './panel-remote-dependency.interface';

export interface PanelOptions {
  title?: string;
  entity?: string;
  endpoint?: string;
  tableOptions?: TableOptionsModel;
  remoteDependencies?: PanelRemoteDependency[];
}
