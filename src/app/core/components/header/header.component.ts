import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Output() onNav: EventEmitter<void> = new EventEmitter();

  //Custom events
  onOpenNav(): void {
    this.onNav.emit();
  }
}
