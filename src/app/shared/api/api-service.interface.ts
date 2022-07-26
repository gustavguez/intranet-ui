import { Observable } from 'rxjs';

export interface ApiServiceInterface {
  auth(username: string, password: string): Observable<any>;
  add(uri: string, data: any): Observable<any>;
}
