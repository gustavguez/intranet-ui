import { FormControl } from '@angular/forms';

export interface UnitForm {
  id: FormControl<number | null>;
  name: FormControl<string>;
}
