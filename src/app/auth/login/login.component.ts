import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  //Custom events
  onLogin(): void {
    this.apiService.auth('', '').subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
  }
}
