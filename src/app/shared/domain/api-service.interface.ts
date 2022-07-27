import { Observable } from 'rxjs';

export interface ApiServiceInterface {
  auth(username: string, password: string): Observable<any>;
  logout(): Observable<any>;
  getLoggedUser(): Observable<any>;
  add(uri: string, data: any): Observable<any>;
}
