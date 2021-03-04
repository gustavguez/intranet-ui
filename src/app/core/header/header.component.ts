import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //Models
  menuState: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { 
    this.menuState = false;
  }

  //Events
  onToggleMenuState() {
    this.menuState = !this.menuState;
  }

  onLogout(event: MouseEvent){
    event.preventDefault();

    //Close nav
    this.menuState = false;

    //Logout
    this.authService.logout().subscribe(() => {
      //Redirect to auth
      this.router.navigate(['auth']);
    });
  }
}
