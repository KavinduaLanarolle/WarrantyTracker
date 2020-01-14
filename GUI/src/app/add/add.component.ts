import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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

  constructor(private http: HttpClient, public router:Router, private datePipe: DatePipe) { }

  ngOnInit() {
    
  }

  addItem(){
    var invoiceDate = this.chooseInvDate.value;
    var warrantyDays = this.noOfDays.value;

    var warrantyEndDate = new Date(this.datePipe.transform(invoiceDate, 'MM/dd/yyyy'));
    warrantyEndDate.setDate(warrantyEndDate.getDate()+parseInt(warrantyDays));

    var endDate = new Date(warrantyEndDate);
    var currentDate = new Date();

    var submissionStatus = 0;

    if (endDate <= currentDate){
      if(confirm('⚠️ Your warranty period has been finished. Are you sure you want to submit for warranty')){
        submissionStatus = 1;
      }else{
        alert("Sorry, Product has been not submitted for warranty process")
      }
    }else{
      submissionStatus = 1
    }
    
    var itemInvoiceDate = new Date(this.datePipe.transform(invoiceDate, 'MM/dd/yyyy'));
    var date = itemInvoiceDate.toString();

    // var currentDate = new Date();
    // currentDate = this.datePipe.transform(currentDate,'MM/dd/yyyy');
    

    let body = new HttpParams({
      fromObject:{
        'itemID':this.wNoFormControl.value,
        'itemName':this.itemName.value,
        'itemCompany':this.company.value,
        'itemFault':this.fault.value,
        'itemInvoiceDate':date,
        'itemCustomer':this.cusName.value,
        'itemContact':this.contact.value
      }
    });

    var request = 'http://ec2-18-191-29-44.us-east-2.compute.amazonaws.com:8080/api/add';

    if(submissionStatus == 1){
      this.http.post<any>(request,body).subscribe(
       data=>{
        this.router.navigate(
          ['/success'],
          {queryParams:{itemID:this.wNoFormControl.value}}
        );
       }
      )
    }
  }

}
