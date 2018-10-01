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
  gridUsers: Array<any>;
  gridDataTable: any;
  gridUsersArray: any[];
  items: any;
  constructor(private router: Router, db: AngularFirestore, private CommonService: CommonService) {          
  }

  ngOnInit() {
     this.CommonService.getGridUsers().subscribe(data => {
       this.gridUsersArray = data;
       console.log('this.gridUsersArray: ', this.gridUsersArray);
     });
     
  }

  signIn(){
    console.log('this.gridUsersArray signIn: ', this.gridUsersArray);
    this.router.navigate(['gridpoc'])
  }

  signUp(){
    this.router.navigate(['signup'])
  }

}
