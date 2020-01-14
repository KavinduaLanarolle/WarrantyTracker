import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

interface Item{
  itemID:string;
  itemName:string;
  itemCompany:string;
  itemFault:string;
  itemInvoicedate:string;
  itemCustomer:string;
  itemContact:string;
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  items:Item[]=[]

  constructor(private http:HttpClient ,public route: ActivatedRoute) { }
  
  itemID:string;

  ngOnInit() {

    this.route.queryParams.subscribe(params=>{
      this.itemID = params['itemID']
    });


    var request = "http://ec2-18-191-29-44.us-east-2.compute.amazonaws.com:8080/api/view?itemID="+this.itemID;
    this.http.get<Item[]>(request).subscribe(data=>{this.items=data;console.log(data)});
  }

}
