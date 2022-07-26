import { Observable } from 'rxjs';

export interface ApiServiceInterface {
  add(uri: string, data: any): Observable<any>;
}
