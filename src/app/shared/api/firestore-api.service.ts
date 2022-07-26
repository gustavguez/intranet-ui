import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

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
    private fireAuth: Auth,
    private fireStore: Firestore // Injects the instantiated Firestore instance
  ) {}

  //Login with username and password
  public auth(username: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.fireAuth, username, password));
  }

  //Add document to any collection
  public add(uri: string, data: any): Observable<any> {
    const collectionName: string = this.uriToCollection(uri);
    const collectionRef: CollectionReference = collection(
      this.fireStore,
      collectionName
    );

    //Return add document
    return from(addDoc(collectionRef, data));
  }

  private uriToCollection(uri: string): string {
    return uri.replace(/\//g, '');
  }
}
