import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  // Inputs and Outputs
  @Input() state: boolean = false;
  @Input() titleText: string = '';
  @Input() closeText: string = '';
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  // Custome events
  onClosePopup(): void {
    this.onClose.emit();
  }
}
