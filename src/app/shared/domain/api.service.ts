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

  public logout(): Observable<any> {
    return this.firestoreApi.logout();
  }

  public getLoggedUser(): Observable<any> {
    return this.firestoreApi.getLoggedUser();
  }

  public add(uri: string, data: any): Observable<any> {
    return this.firestoreApi.add(uri, data);
  }

  public edit(uri: string, id: string, data: any): Observable<any> {
    return this.firestoreApi.edit(uri, id, data);
  }

  public delete(uri: string, id: string): Observable<any> {
    return this.firestoreApi.delete(uri, id);
  }

  public fetch(uri: string, params?: any): Observable<any> {
    return this.firestoreApi.fetch(uri, params);
  }
}
