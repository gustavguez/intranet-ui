import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserModel } from '../auth-user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //Models
  form: FormGroup;
  loading: boolean;

  //Inject services
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    //Init models
    this.loading = false;

    //Create form
    this.form = this.fb.group({
      'email': this.fb.control('', [Validators.required, Validators.email]),
      'password': this.fb.control('', [Validators.required])
    });
  }

  //Submit
  onLogin(){
    //Check valid
    if(this.form.valid){
      const value: any = this.form.value;

      //Start loading
      this.loading = true;

      //Do request
      this.authService.login(value.email, value.password).subscribe(
        (response: AuthUserModel) => {
          //Stop loading
          this.loading = false;
        },
        (error: string) => {
          //Stop loading
          this.loading = false;
        }
      )
    }
  }
}
