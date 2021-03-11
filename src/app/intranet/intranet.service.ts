import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntranetService {

  constructor(
    private firestore: AngularFirestore ) { }

  public detectFirestoreNeedInitialize(): Observable<boolean> {
    return this.firestore.collection('products').get().pipe(
      map((response: any) => response.empty)
    );
  }
}
