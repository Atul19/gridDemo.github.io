import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { GridTable } from '../service/grid-user';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-gridpoc',
  templateUrl: './gridpoc.component.html',
  styleUrls: ['./gridpoc.component.scss']
})
export class GridpocComponent implements OnInit {
  
  gridDataTable: any[];

  constructor(db: AngularFireDatabase, private CommonService: CommonService) {    
        
  }

  ngOnInit() {
    this.CommonService.getGridData().subscribe(data => {
      this.gridDataTable = data;
      console.log('this.gridDataTable: ', this.gridDataTable);
    });
  }

}
