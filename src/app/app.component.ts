import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserModel } from './auth/auth-user.model';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let route: string = 'auth';
    const user: AuthUserModel | null = this.authService.getAuthUser();

    //Check 
    if(user){
      route = 'intranet';
    }

    //Redirect
    this.router.navigate([route]);
  }
}
