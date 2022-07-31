import { TableHeaderModel } from './table-header.model';

export class TableOptionsModel {
  // Contructor
  constructor(public headers?: TableHeaderModel[], public fields?: string[]) {}
}
