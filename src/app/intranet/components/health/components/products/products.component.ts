import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleDriveUrlService } from 'src/app/shared/components/google-drive-url/google-drive-url.service';

import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { environment } from 'src/environments/environment';
import { ProductForm } from './product-form.interface';
import { Product } from '../../domain/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  //Models
  options: PanelOptions = {
    title: 'Productos',
    entity: 'producto',
    endpoint: environment.healthProductsUri,
    tableOptions: {
      fields: ['name'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [new TableHeaderModel('Nombre')],
    },
  };
  form: FormGroup<ProductForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    pictureUrl: new FormControl('', {
      nonNullable: true,
    }),
  });

  //Inject services
  constructor(private googleDriveUrlService: GoogleDriveUrlService) {}

  //Function to parse model
  updateModel(json: any, model: Product): void {
    model.name = json.name;
    model.pictureUrl = json.pictureUrl;
  }

  onOpenGoogleDriveUrl(): void {
    this.googleDriveUrlService.changeState(true);
  }
  onConfirmGoogleDriveUrl(url: string): void {
    this.form.patchValue({ pictureUrl: url });
  }
}
