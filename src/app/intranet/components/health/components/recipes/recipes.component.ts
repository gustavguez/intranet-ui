import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleDriveUrlService } from 'src/app/shared/components/google-drive-url/google-drive-url.service';
import { PanelOptions } from 'src/app/shared/components/panel/panel-options.interface';
import { TableDeleteActionModel } from 'src/app/shared/components/table/domain/table-delete-action.model';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { environment } from 'src/environments/environment';
import { RecipeForm } from './recipe-form.interface';
import { Recipe } from '../../domain/recipe.interface';
import { Product } from '../../domain/product.interface';
import { Unit } from '../../domain/unit.interface';
import { PanelRemoteDependency } from 'src/app/shared/components/panel/panel-remote-dependency.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  //Models
  options: PanelOptions = {
    title: 'Recetas',
    entity: 'receta',
    endpoint: environment.healthRecipesUri,
    tableOptions: {
      fields: ['title'],
      actions: [new TableEditActionModel(), new TableDeleteActionModel()],
      headers: [new TableHeaderModel('Título')],
    },
    remoteDependencies: [
      { endpoint: environment.healthProductsUri, key: 'products' },
      { endpoint: environment.healthUnitsUri, key: 'units' },
    ],
  };

  form: FormGroup<RecipeForm> = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    content: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    pictureUrl: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    ingredients: new FormArray<any>([]),
  });

  products: Product[] = [];
  units: Unit[] = [];

  //Inject services
  constructor(private googleDriveUrlService: GoogleDriveUrlService) {}

  //Function to parse model
  updateModel(json: any, model: Recipe): void {
    model.title = json.title;
  }

  getIngredients(): FormArray {
    return <FormArray>this.form.get('ingredients');
  }

  onOpenGoogleDriveUrl(): void {
    this.googleDriveUrlService.changeState(true);
  }

  onConfirmGoogleDriveUrl(url: string): void {
    this.form.patchValue({ pictureUrl: url });
  }

  onAddIngredient(): void {
    const ingredients: FormArray = this.getIngredients();
    ingredients.push(this.getIngredientFormGroup());
  }

  onRemoveIngredient(index: number): void {
    const ingredients: FormArray = this.getIngredients();
    ingredients.removeAt(index);
  }

  onUnitChange(index: number): void {
    const ingredients: FormArray = this.getIngredients();
    const unitId: string = ingredients.get([index, 'unitId'])?.value;
    const unit: Unit | undefined = this.units.find(
      (unit: Unit) => unit.id == unitId
    );

    if (unit) {
      ingredients.get([index, 'unit'])?.patchValue(unit);
    }
  }

  onProductChange(index: number): void {
    const ingredients: FormArray = this.getIngredients();
    const productId: string = ingredients.get([index, 'productId'])?.value;
    const product: Product | undefined = this.products.find(
      (product: Product) => product.id == productId
    );

    if (product) {
      ingredients.get([index, 'product'])?.patchValue(product);
    }
  }

  onRemoteDependenciesEnd(dependencies: PanelRemoteDependency[]): void {
    if (dependencies instanceof Array) {
      dependencies.forEach((dependency: PanelRemoteDependency) => {
        if (dependency.key === 'products') {
          this.products = <Product[]>dependency.data;
        } else if (dependency.key === 'units') {
          this.units = <Unit[]>dependency.data;
        }
      });
    }
  }

  //private methods
  private getIngredientFormGroup(value?: any): FormGroup {
    return new FormGroup({
      productId: new FormControl(value?.productId ?? ''),
      unitId: new FormControl(value?.unitId ?? ''),
      quantity: new FormControl(value?.quantity ?? ''),
      product: new FormControl(value?.product ?? {}),
      unit: new FormControl(value?.unit ?? {}),
    });
  }
}
