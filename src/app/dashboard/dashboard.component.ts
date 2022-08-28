import { Component, OnInit } from '@angular/core';

import userData from '../users.json';
interface User{
  id:Number;
  name:String;
  phone:String;
  transaction_cat:String;
  transaction_amt:Number;
  account_type:String;
  balance_amt:Number;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:User[]=userData;


  constructor() {
    console.log(this.users);
    
   }


  ngOnInit(): void {
  }

}
