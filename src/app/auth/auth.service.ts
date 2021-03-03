import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email: string, password: string): Observable<boolean> {
    let obs: Observable<boolean> = new Observable((sub: Subscriber<boolean>) => {

    })
    return obs;
    // var scope = this;
    // firebase.auth().signInWithEmailAndPassword(this.Email, this.Password)
    //   .then(function () {
    //     if (firebase.auth().currentUser.emailVerified) {
    //       scope.OpenAdminDashboad();
    //       console.log("correo validado");
    //     } else {
    //       console.log("correo no validado");
    //       //scope.LogOut();
    //       scope.BorrarCampos();
    //       scope.ResendEmailVerification();
    //       scope.router.navigate(['verificacion-email']);
    //     }
    //   })
    //   .catch(function (error) {
    //     const errorCode = error.code;
    //     let errorMessage = scope.VerifyErroCode(errorCode);
    //     scope.Notificacion(errorMessage);
    //     if (errorMessage == null) {
    //       errorMessage = error.message;
    //     }
    //   });
  }
}
