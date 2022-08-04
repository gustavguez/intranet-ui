import { StatusEnum } from 'src/app/shared/domain/status.enum';
import { TableActionModel } from './table-action.model';

export class TableDeleteActionModel extends TableActionModel {
  constructor(
    mustDisplayCallback?: (model: any) => boolean,
    mustDisableCallback?: (model: any) => boolean
  ) {
    // Call parent constructor
    super('trash-2', 'Eliminar', mustDisplayCallback, mustDisableCallback);

    //By default danger status
    this.status = StatusEnum.DANGER;
  }
}
