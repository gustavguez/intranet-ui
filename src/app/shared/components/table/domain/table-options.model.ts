import { TableActionModel } from './table-action.model';
import { TableHeaderModel } from './table-header.model';

export class TableOptionsModel {
  // Models
  public actions?: TableActionModel[] = [];

  // Contructor
  constructor(public headers?: TableHeaderModel[], public fields?: string[]) {}
}
