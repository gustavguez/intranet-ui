import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserInterface } from './auth/domain/auth-user.interface';
import { AuthService } from './auth/domain/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private authService: AuthService, private router: Router) {}

  // Method call before app run
  // Here we must load the app initial state
  public init(): Promise<void> {
    return new Promise((resolve: any) => {
      // Load user from firebase
      this.authService
        .loadSession()
        .subscribe((response: AuthUserInterface | null) => {
          let state: string = 'dashboard';

          //Check response
          if (!response) {
            state = 'login';
          }

          //Resolve
          resolve();

          //Redirect
          this.router.navigate([state]);
        });
    });
  }
}
