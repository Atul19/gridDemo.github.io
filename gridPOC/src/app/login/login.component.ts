import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonService} from "../service/common.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  gridDataTable: any[];
  gridUsersArray: any[];
  
  constructor(private router: Router, db: AngularFirestore, private CommonService: CommonService) {          
  }

  ngOnInit() {
     this.CommonService.getGridUsers().subscribe(data => {
       this.gridUsersArray = data;
       console.log('this.gridUsersArray: ', this.gridUsersArray);
     });

     this.CommonService.getGridData().subscribe(data => {
      this.gridDataTable = data;
      console.log('this.gridDataTable: ', this.gridDataTable);
    });
     
  }

  signIn(){
    console.log('this.gridUsersArray signIn: ', this.gridDataTable);
    this.router.navigate(['poc'])
  }

  signUp(){
    this.router.navigate(['signup'])
  }

}
