import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/domain/api.service';
import { environment } from 'src/environments/environment';
import translations from '../../auth.translations';
import { LoginFormInterface } from './login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  //Create login form
  loginForm: FormGroup<LoginFormInterface> = new FormGroup<LoginFormInterface>({
    username: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //UI vars
  loading: boolean = false;
  error: string = '';

  //Inject services
  constructor(private apiService: ApiService, private router: Router) {}

  //Custom events
  onLogin(): void {
    const value: any = this.loginForm.value;

    //Control valid
    if (!this.loginForm.valid) {
      return;
    }

    //Start loading
    this.loading = true;
    this.error = '';

    //Call collection
    this.apiService.add(environment.nutritionsUnitsUri, { name: 'Gramos' });

    //Do auth
    this.apiService.auth(value.username, value.password).subscribe({
      error: (error: Error) => {
        //Stop loading
        this.loading = false;

        //Show error
        this.error = translations.ERROR_FAIL_LOGIN;
      },
      next: () => {
        //Stop loading
        this.loading = false;

        //Redirect to dashboard
        this.router.navigate(['dashboard']);
      },
    });
  }
}
