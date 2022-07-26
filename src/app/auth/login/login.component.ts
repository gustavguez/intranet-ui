import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  //Create login form
  loginForm: FormGroup<any> = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  //UI vars
  loading: boolean = false;
  error: string = '';

  //Inject services
  constructor(private apiService: ApiService) {}

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
        this.error = 'Clave o contraseña invalida.';
      },
      next: () => {
        //Stop loading
        this.loading = false;

        //TODO: redirect to dashboard
        //TODO: implement app initializer
      },
    });
  }
}
