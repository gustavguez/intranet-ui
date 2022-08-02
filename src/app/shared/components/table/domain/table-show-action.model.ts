import { TableActionModel } from './table-action.model';

export class TableShowActionModel extends TableActionModel {
  constructor(
    mustDisplayCallback?: (model: any) => boolean,
    mustDisableCallback?: (model: any) => boolean
  ) {
    // Call parent constructor
    super(
      'fas fa-search',
      'Show model',
      mustDisplayCallback,
      mustDisableCallback
    );
  }
}
