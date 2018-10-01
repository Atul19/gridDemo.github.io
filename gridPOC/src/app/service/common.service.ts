import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {GridUser} from '../service/grid-user'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  gridUserCollection: AngularFirestoreCollection<GridUser>;
  gridUsers: Observable<GridUser[]>;
  constructor(private firebasedb: AngularFirestore) { 
       
  }

  getGridUsers(){   
    this.gridUserCollection = this.firebasedb.collection('gridPocUsers');
    this.gridUsers = this.gridUserCollection.valueChanges();
    return this.gridUsers;
  }

}
