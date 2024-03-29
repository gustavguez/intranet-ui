import { Observable } from 'rxjs';

export interface ApiServiceInterface {
  auth(username: string, password: string): Observable<any>;
  logout(): Observable<any>;
  getLoggedUser(): Observable<any>;
  add(uri: string, data: any): Observable<any>;
  edit(uri: string, id: string, data: any): Observable<any>;
  delete(uri: string, id: string): Observable<any>;
  fetch(uri: string, params?: any): Observable<any>;
}
