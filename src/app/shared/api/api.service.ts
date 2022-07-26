import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreApiService } from './firestore-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private firestoreApi: FirestoreApiService) {}

  public auth(username: string, password: string): Observable<any> {
    return this.firestoreApi.auth(username, password);
  }

  public add(uri: string, data: any): Observable<any> {
    return this.firestoreApi.add(uri, data);
  }
}
