import { FormControl } from '@angular/forms';

export interface ProductForm {
  id: FormControl<string | null>;
  name: FormControl<string>;
}
