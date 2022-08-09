import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { environment } from 'src/environments/environment';
import { RecipeTypeForm } from '../../domain/recipe-type-form.interface';
import { RecipeType } from '../../domain/recipe-type.interface';

@Component({
  selector: 'app-recipe-types',
  templateUrl: './recipe-types.component.html',
})
export class RecipeTypesComponent {
  //Models
  options: PanelOptions = {
    title: 'Categorías de recetas',
    entity: 'categoría',
    endpoint: environment.healthRecipeTypesUri,
    tableOptions: {
      fields: ['name'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [new TableHeaderModel('Nombre')],
    },
  };
  form: FormGroup<RecipeTypeForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //Inject services
  constructor() {}

  //Function to parse model
  updateModel(json: any, model: RecipeType): void {
    model.name = json.name;
  }
}
