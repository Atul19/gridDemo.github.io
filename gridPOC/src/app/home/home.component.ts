import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { GridTable } from '../service/grid-user';
import { GridTableData } from '../service/grid-user';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = {};
  gridDataTable: any[];
  marketCaps = [
    { size: 'Large Cap' },
    { size: 'Mid Cap' },
    { size: 'Small Cap' }
  ];

  constructor(db: AngularFireDatabase, private CommonService: CommonService) {    
        
  }

  ngOnInit() {
    this.CommonService.getGridData().subscribe(data => {
      this.gridDataTable = data;
      console.log('this.gridDataTable: ', this.gridDataTable);
    });
  }

  addItem(item) {
    console.log("item: ",item)    
    this.CommonService.addGridData(item)
  }
}
