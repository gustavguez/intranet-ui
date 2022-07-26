import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreApiService } from './firestore-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private firestoreApi: FirestoreApiService) {}

  public add(uri: string, data: any): Observable<any> {
    return this.firestoreApi.add(uri, data);
  }
}
