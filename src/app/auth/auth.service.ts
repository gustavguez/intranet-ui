import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

import { firebaseErrors } from '../shared/firebase/firebase-errors';
import { AuthUserModel } from './auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser: AuthUserModel | null;
  public onAuthUserChange: EventEmitter<AuthUserModel | null>;

  constructor(private fireAuthService: AngularFireAuth) {
    //Init models
    this.authUser = null;
    this.onAuthUserChange = new EventEmitter();
  }

  public getAuthUser(): AuthUserModel | null {
    return this.authUser;
  }

  public login(email: string, password: string): Observable<AuthUserModel> {
    let obs: Observable<AuthUserModel> = new Observable((sub: Subscriber<AuthUserModel>) => {
      this.fireAuthService.signInWithEmailAndPassword(email, password).then((response: any) => {
        //Load to user
        this.authUser = new AuthUserModel(response.email);

        //Emit change
        this.onAuthUserChange.emit(this.authUser);

        //Resolve obs
        sub.next(this.authUser);
        sub.complete();
      }).catch((error: any) => {
        //resolve observable with error
        sub.error(firebaseErrors[error.code]);
      })
    })
    return obs;
  }

  public logout(): Observable<void> {
    let obs: Observable<void> = new Observable((sub: Subscriber<void>) => {
      //Load to user
      this.authUser = null;

      //Signout
      this.fireAuthService.signOut().finally(() => {
        //Emit change
        this.onAuthUserChange.emit(this.authUser);

        //Resolve obs
        sub.next();
        sub.complete();
      })
    });
    return obs;
  }

  public loadSession(): Observable<AuthUserModel | null> {
    this.authUser = null;
    return this.fireAuthService.user.pipe(
      map((response: any) => {
        if (response) {
          this.authUser = new AuthUserModel(response.email);
        }
        return this.authUser;
      })
    );
  }
}
