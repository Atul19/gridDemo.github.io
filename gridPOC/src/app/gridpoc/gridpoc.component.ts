import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { GridTable } from '../service/grid-user';
import { GridTableData } from '../service/grid-user';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-gridpoc',
  templateUrl: './gridpoc.component.html',
  styleUrls: ['./gridpoc.component.scss']
})
export class GridpocComponent implements OnInit {

  data = new GridTableData();
  gridDataTable: any[];
  gridDataListArray: any[];

  constructor(db: AngularFireDatabase, private CommonService: CommonService) {    
        
  }

  ngOnInit() {
    this.CommonService.getGridData().subscribe(data => {
      this.gridDataTable = data;
      console.log('this.gridDataTable: ', this.gridDataTable);
    });

    this.CommonService.getGridDataList().snapshotChanges().subscribe(item => {
      this.gridDataListArray = [];
      
      item.forEach(element => {
        let obj = element.payload.val();
        obj["$key"] = element.key;
        this.gridDataListArray.push(obj);
      });
      console.log("todoListArray: ",this.gridDataListArray);

      this.gridDataListArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      });
      console.log("todoListArray-checked: ",this.gridDataListArray);
    });

  }

  onSubmit(){
    
  }

  deleteData(data, index){
    this.CommonService.deleteGridData();
  }
  
  addTodo(todo){
    if(todo.value){      
      this.CommonService.addGridDataList(todo.value);
      todo.value = null;
    }    
  }  
  
  deleteTodo($key:string){    
    this.CommonService.removeGridDataList($key);
  }


}
