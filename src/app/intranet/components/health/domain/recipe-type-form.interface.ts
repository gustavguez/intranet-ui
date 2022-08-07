import { FormControl } from '@angular/forms';

export interface RecipeTypeForm {
  id: FormControl<string | null>;
  name: FormControl<string>;
}
