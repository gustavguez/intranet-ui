import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
  // Inputs and Outputs
  @Input() state: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();

  // Custome events
  onClosePopup(): void {
    this.onClose.emit();
  }
  onConfirmPopup(): void {
    this.onConfirm.emit();
  }
}
