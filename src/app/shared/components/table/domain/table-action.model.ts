import { StatusEnum } from 'src/app/shared/domain/status.enum';

export class TableActionModel {
  // Models
  public btnClasses: string;
  public status: StatusEnum;

  // Constructor
  constructor(
    public icon?: string,
    public text?: string,
    public mustDisplayCallback?: (model: any) => boolean,
    public mustDisableCallback?: (model: any) => boolean
  ) {
    // By default is primary
    this.status = StatusEnum.PRIMARY;
    this.btnClasses = '';
  }

  // Abstract methods
  public mustDisplay(model: any): boolean {
    return this.mustDisplayCallback instanceof Function
      ? this.mustDisplayCallback(model)
      : true;
  }
  public mustDisable(model: any): boolean {
    return this.mustDisableCallback instanceof Function
      ? this.mustDisableCallback(model)
      : false;
  }
}
