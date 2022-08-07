import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { environment } from 'src/environments/environment';
import { RecipeForm } from '../../domain/recipe-form.interface';
import { Recipe } from '../../domain/recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  //Models
  options: PanelOptions = {
    title: 'Recetas',
    endpoint: environment.healthRecipesUri,
    tableOptions: {
      fields: ['title'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [new TableHeaderModel('Título')],
    },
  };
  form: FormGroup<RecipeForm> = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //Inject services
  constructor() {}

  //Function to parse model
  updateModel(json: any, model: Recipe): void {
    model.title = json.title;
  }
}
