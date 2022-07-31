import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/domain/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  @Input() status: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogout(event: MouseEvent): void {
    //Prevent default
    event.preventDefault();

    //Do logout
    this.authService.logout().subscribe(() => {
      //Redirect to login
      this.router.navigate(['login']);
    });
  }
}
