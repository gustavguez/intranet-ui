import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  navStatus: boolean = false;

  //Custome vents
  onNav(): void {
    this.navStatus = !this.navStatus;
  }
}
