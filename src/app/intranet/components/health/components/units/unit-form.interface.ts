import { FormControl } from '@angular/forms';

export interface UnitForm {
  id: FormControl<string | null>;
  name: FormControl<string>;
  plural: FormControl<string>;
}
