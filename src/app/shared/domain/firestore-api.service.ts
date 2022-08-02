import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

import {
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  Query,
  query,
  DocumentSnapshot,
  DocumentData,
  updateDoc,
} from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { from, map, mergeMap, Observable, Subscriber } from 'rxjs';
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

  public logout(): Observable<any> {
    return from(this.fireAuth.signOut());
  }

  public getLoggedUser(): Observable<any> {
    return new Observable((subscriber: Subscriber<any>) => {
      this.fireAuth.onAuthStateChanged((response: any) => {
        //Return user data
        subscriber.next(
          response
            ? {
                id: response.uid,
                email: response.email,
                displayName: response.displayName,
              }
            : null
        );

        //Finish observable
        subscriber.complete();
      });
    });
  }

  //Add document to any collection
  public add(uri: string, data: any): Observable<any> {
    const collectionName: string = this.uriToCollection(uri);
    const collectionRef: CollectionReference = collection(
      this.fireStore,
      collectionName
    );

    //Return add document
    return from(addDoc(collectionRef, data)).pipe(
      map((response: any) => {
        //add the id and return the same data
        data.id = response.id;
        return data;
      })
    );
  }

  //Add document to any collection
  public edit(uri: string, id: string, data: any): Observable<any> {
    const collectionName: string = this.uriToCollection(uri);
    const documentRef: DocumentReference = doc(
      this.fireStore,
      `${collectionName}/${id}`
    );

    //Return add document
    return from(updateDoc(documentRef, data)).pipe(
      map((response: any) => {
        //add the id and return the same data
        data.id = id;
        return data;
      })
    );
  }

  //Fetch collection
  public fetch(uri: string, parms?: any): Observable<any> {
    const collectionName: string = this.uriToCollection(uri);
    const collectionRef: CollectionReference = collection(
      this.fireStore,
      collectionName
    );

    const q: Query = query(collectionRef);

    //Return add document
    return from(getDocs(q)).pipe(
      map((response: any) => {
        const data: any[] = [];
        response.forEach((doc: any) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        return data;
      })
    );
  }

  private uriToCollection(uri: string): string {
    return uri.replace(/\//g, '');
  }
}
