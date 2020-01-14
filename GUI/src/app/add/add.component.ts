import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  wNoFormControl=new FormControl();
  noOfDays=new FormControl();
  chooseInvDate=new FormControl();
  itemName= new FormControl();
  company=new FormControl();
  fault=new FormControl();
  cusName=new FormControl();
  contact=new FormControl();

  constructor() { }

  ngOnInit() {
    
  }

}
