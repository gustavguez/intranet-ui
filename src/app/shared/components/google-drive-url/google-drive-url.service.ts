import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleDriveUrlService {
  public onStateChange: EventEmitter<boolean> = new EventEmitter();

  public changeState(state: boolean): void {
    this.onStateChange.emit(state);
  }
}
