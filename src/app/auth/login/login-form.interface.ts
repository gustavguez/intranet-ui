import { FormControl } from '@angular/forms';

export interface LoginFormInterface {
  username: FormControl<string>;
  password: FormControl<string>;
}
