import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {GridUser} from '../service/grid-user';
import {GridTable} from '../service/grid-user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  gridUserCollection: AngularFirestoreCollection<GridUser>;
  gridUsers: Observable<GridUser[]>;

  gridTableCollection: AngularFirestoreCollection<GridTable>;
  gridTableData: Observable<GridTable[]>;
  gridData:any;

  constructor(private firebasedb: AngularFirestore) { 
       
  }

  getGridUsers(){   
    this.gridUserCollection = this.firebasedb.collection('gridPocUsers');
    this.gridUsers = this.gridUserCollection.valueChanges();
    return this.gridUsers;
  }

  getGridData(){
    this.gridTableCollection = this.firebasedb.collection('gridPocTable');
    this.gridTableData = this.gridTableCollection.valueChanges();
    return this.gridTableData;
  }

}
