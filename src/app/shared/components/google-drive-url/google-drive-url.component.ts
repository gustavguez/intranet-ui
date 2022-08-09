import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GoogleDriveUrlService } from './google-drive-url.service';

@Component({
  selector: 'app-google-drive-url',
  templateUrl: './google-drive-url.component.html',
})
export class GoogleDriveUrlComponent implements OnInit, OnDestroy {
  //Models
  state: boolean = false;
  subscriptions: Subscription[] = [];
  form: FormGroup = new FormGroup({
    url: new FormControl(''),
  });

  //Output
  @Output() onConfirm: EventEmitter<string> = new EventEmitter();

  //Inject services
  constructor(private googleDriveUrlService: GoogleDriveUrlService) {}

  //On init
  ngOnInit(): void {
    this.subscriptions.push(
      this.googleDriveUrlService.onStateChange.subscribe((state: boolean) => {
        this.state = state;
        this.form.reset();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  //Custom event
  onSubmit(): void {
    //Close form
    this.state = false;

    //Split string
    const urlParts: string[] = this.form.value.url.split('/');

    //ultimate url
    const id: string = urlParts[5] ?? '';
    const url: string = `http://drive.google.com/uc?export=view&id=${id}`;
    this.onConfirm.emit(id ? url : '');
  }

  onClosePopup(): void {
    this.state = false;
  }
}
