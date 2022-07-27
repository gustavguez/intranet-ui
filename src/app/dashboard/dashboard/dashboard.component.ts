import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    //Do logout
    this.apiService.logout().subscribe(() => {
      //Redirect to login
      this.router.navigate(['login']);
    });
  }
}
