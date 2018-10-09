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

  addGridDataList(gridataList){
    if(gridataList){      
      this.CommonService.addGridDataList(gridataList);
      this.data = {};
    }    
  }  
  
  deleteGridDataList(data){    
    this.CommonService.removeGridDataList(data.$key);
  }

}
