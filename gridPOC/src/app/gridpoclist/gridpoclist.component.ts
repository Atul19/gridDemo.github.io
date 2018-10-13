import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-gridpoclist',
  templateUrl: './gridpoclist.component.html',
  styleUrls: ['./gridpoclist.component.scss']
})
export class GridpoclistComponent implements OnInit {
  
  update:boolean = false;
  gridDataListArray: any[];
  data = {};
  marketCaps = [
    { size: 'Large Cap' },
    { size: 'Mid Cap' },
    { size: 'Small Cap' }
  ];

  constructor(db: AngularFireDatabase, private CommonService: CommonService) {    
        
  }

  ngOnInit() {        

    this.CommonService.getGridDataList().snapshotChanges().subscribe(item => {
      this.gridDataListArray = [];
      
      item.forEach(element => {
        let obj = element.payload.val();
        obj["$key"] = element.key;
        this.gridDataListArray.push(obj);
      });
      console.log("gridDataListArray: ",this.gridDataListArray);      
    });

  }

  addGridDataList(gridataList, update){
    if(gridataList){
      if(this.update === true){
        this.CommonService.updateGridDataList(gridataList);
      }else{
        this.CommonService.addGridDataList(gridataList);
      }                  
    }
    this.data = {};
    this.update = false;    
  }
  
  editGridDataList(data){
    this.update = true;
    this.data = Object.assign({},data);    
  }
  
  deleteGridDataList(data){    
    this.CommonService.removeGridDataList(data.$key);
  }

  cancel(){
    this.data = {};
    this.update = false;
  }

}
