import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/api/api.service';
import { environment } from 'src/environments/environment';
import translations from '../auth.translations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  //Create login form
  loginForm: UntypedFormGroup = new UntypedFormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
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
