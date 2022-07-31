import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() isError: boolean = false;
  @Input() isSuccess: boolean = false;
  @Input() isInfo: boolean = false;
}
