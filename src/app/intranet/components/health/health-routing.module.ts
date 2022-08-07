import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { RecipeTypesComponent } from './components/recipe-types/recipe-types.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { UnitsComponent } from './components/units/units.component';

const routes: Routes = [
  {
    path: 'units',
    component: UnitsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'recipe-types',
    component: RecipeTypesComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthRoutingModule {}
