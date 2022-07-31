import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
})
export class PlaceholderComponent {
  @Input() hideAdd: boolean = false;
  @Output() onAdd: EventEmitter<void> = new EventEmitter();

  //Custom events
  onAddEvent(event: MouseEvent): void {
    event.preventDefault();
    this.onAdd.emit();
  }
}
