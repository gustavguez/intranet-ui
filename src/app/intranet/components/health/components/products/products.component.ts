import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { environment } from 'src/environments/environment';
import { ProductForm } from '../../domain/product-form.interface';
import { Product } from '../../domain/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  //Models
  options: PanelOptions = {
    title: 'Productos',
    endpoint: environment.healthProductsUri,
    tableOptions: {
      fields: ['name'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [new TableHeaderModel('Nombre')],
    },
  };
  form: FormGroup<ProductForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  //Inject services
  constructor() {}

  //Function to parse model
  updateModel(json: any, model: Product): void {
    model.name = json.name;
  }
}
