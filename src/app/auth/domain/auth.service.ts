import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/domain/api.service';
import { AuthUserInterface } from './auth-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: AuthUserInterface | null = null;

  constructor(private apiService: ApiService) {}

  public getUser(): AuthUserInterface | null {
    return this.user;
  }

  public loadSession(): Observable<AuthUserInterface | null> {
    return this.apiService.getLoggedUser().pipe(
      map((response: any) => {
        //Load response
        this.user = response ? <AuthUserInterface>response : null;
        return this.user;
      })
    );
  }

  public logout(): Observable<void> {
    return this.apiService.logout();
  }
}
