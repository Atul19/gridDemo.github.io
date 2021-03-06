import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
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

  gridDataList: AngularFireList<any>; 

  constructor(private firebasedb: AngularFirestore, private gridDB: AngularFireDatabase) { 
    this.gridTableCollection = this.firebasedb.collection('gridPocTable');
    this.gridTableData = this.gridTableCollection.valueChanges();
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

  addGridData(data){
    this.gridTableCollection.add(data);
  }

  deleteGridData(){
    
  }

  getGridDataList(){
    this.gridDataList = this.gridDB.list("gridTableData");
    return this.gridDataList;
  }

  addGridDataList(data){
    this.gridDataList.push(data);
  }

  updateGridDataList(data){
    const $key = data.$key;
    delete data.$key;
    this.gridDataList.update($key, data);
  }

  removeGridDataList($key: string){
    this.gridDataList.remove($key);
  }

}
