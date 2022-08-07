import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
})
export class InputFileComponent {
  // Inputs
  @Input() form: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() controlFilename: string = '';

  //ViewChild
  @ViewChild('file') input?: ElementRef;

  // Outputs
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  // Custom events
  onEmitChange(): void {
    //Try to get the file
    if (this.input?.nativeElement.files) {
      const file: File = this.input.nativeElement.files[0];

      //Persis value to input file
      this.changeFormValue(file);

      //Emit event
      this.onChange.emit(file);
    }
  }

  onClear(): void {
    //Clear
    this.changeFormValue(null, '');

    //Emit change
    this.onChange.emit(null);
  }

  //Helper functions
  private changeFormValue(file: File | null, fileName?: string): void {
    this.form.patchValue({
      [this.controlName]: file,
      [this.controlFilename]: fileName ? fileName : null,
    });
  }
}
