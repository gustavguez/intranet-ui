import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { Model } from 'src/app/shared/domain/model.interface';
import { environment } from 'src/environments/environment';
import { UnitForm } from '../../domain/unit-form.interface';
import { Unit } from '../../domain/unit.interface';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
})
export class UnitsComponent {
  //Models
  options: PanelOptions = {
    title: 'Unidades',
    endpoint: environment.healthUnitsUri,
    tableOptions: {
      fields: ['name', 'plural'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [
        new TableHeaderModel('Nombre'),
        new TableHeaderModel('Nombre en plural'),
      ],
    },
  };
  form: FormGroup<UnitForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    plural: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //Inject services
  constructor() {}

  //Function to parse model
  updateModel(json: any, model: Unit): void {
    model.name = json.name;
    model.plural = json.plural;
  }
}
