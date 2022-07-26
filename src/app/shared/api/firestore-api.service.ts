import { Injectable } from '@angular/core';

import {
  addDoc,
  collection,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { ApiServiceInterface } from './api-service.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreApiService implements ApiServiceInterface {
  constructor(
    private firestore: Firestore // Injects the instantiated Firestore instance
  ) {}

  //Add document to any collection
  public add(uri: string, data: any): Observable<any> {
    const collectionName: string = this.uriToCollection(uri);
    const collectionRef: CollectionReference = collection(
      this.firestore,
      collectionName
    );

    //Return add document
    return from(addDoc(collectionRef, data));
  }

  private uriToCollection(uri: string): string {
    return uri.replace(/\//g, '');
  }
}
