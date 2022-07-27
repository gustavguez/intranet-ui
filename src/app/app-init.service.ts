import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './shared/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private apiService: ApiService, private router: Router) {}

  // Method call before app run
  // Here we must load the app initial state
  public init(): Promise<void> {
    return new Promise((resolve: any) => {
      // Load user from firebase
      this.apiService.getLoggedUser().subscribe((response: any) => {
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
