import { FormControl } from '@angular/forms';

export interface RecipeForm {
  id: FormControl<string | null>;
  title: FormControl<string>;
  content: FormControl<string>;
  pictureUrl: FormControl<string>;
}
