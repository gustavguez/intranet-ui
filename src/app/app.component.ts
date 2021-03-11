import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserModel } from './auth/auth-user.model';
import { AuthService } from './auth/auth.service';
import { IntranetService } from './intranet/intranet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private intranetService: IntranetService
  ) { }

  ngOnInit() {
    //Watch user state change
    this.authService.onAuthUserChange.subscribe((authUser: AuthUserModel | null) => {
      this.reactToAuthUserChange();
    });

    //Emit at starts
    this.reactToAuthUserChange();
  }

  private reactToAuthUserChange(){
    const user: AuthUserModel | null = this.authService.getAuthUser();

    //Check 
    if(user){
      // Detect firestore
      this.intranetService.detectFirestoreNeedInitialize().subscribe((needInitialize: boolean) => {
        // Redirect to route
        this.router.navigate([needInitialize ? 'intranet/initialize' : 'intranet']);
      });
    } else {
      //Redirect to auth
      this.router.navigate(['auth']);
    }
  }
}
