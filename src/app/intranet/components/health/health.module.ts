import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { UnitsComponent } from './components/units/units.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatherModule } from 'angular-feather';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { RecipeTypesComponent } from './components/recipe-types/recipe-types.component';

@NgModule({
  declarations: [UnitsComponent, ProductsComponent, RecipeTypesComponent],
  imports: [
    CommonModule,
    HealthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class HealthModule {}
