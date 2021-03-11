import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AppInitializerService {

	constructor(
		private authService: AuthService) { }

	// Method call before app run
	// Here we must load the app initial state
	public init(): Promise<void> {
		return new Promise((resolve: any) => {
			// Load user from firebase
			this.authService.loadSession().subscribe(() => {
				// Resolve
				resolve();
			});
		});
	}
}