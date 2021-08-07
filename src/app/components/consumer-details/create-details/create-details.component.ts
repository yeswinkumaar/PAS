import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { IConsumerFormData } from 'src/app/models/consumerData';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: ['./create-details.component.css']
})
export class CreateDetailsComponent implements OnInit {
  public consumerForm = new FormGroup({});
  public categories = ['Retailer', 'Food service', 'Supplier', 'Manufacturer', 'Business Service', 'Investor'];
  public retailerTypes = ['Independent Grocer', 'Home Textile', 'Pharmacy'];
  public actualTypes: Array<string> = [];
  public bsCategory = '';
  public message = '';
  public errorMessage = '';
  constructor(private _consumerFormBuilder: FormBuilder, 
    private _router: Router,
    private consumerService: ConsumerService
  ) { }

  ngOnInit(): void {
    this.consumerForm = this._consumerFormBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      businessname: ['',Validators.required],
      dob: ['',Validators.required],
      email: ['',Validators.required],
      website: ['',Validators.required],
      businessoverview: ['',Validators.required],
      validity: ['',Validators.required],
      agentname: ['',Validators.required],
      agentid: ['',Validators.required],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pandetails: ['',[Validators.required, Validators.pattern('^[A-Z0-9]{10}$')]],
      businesscategory: [null],
      businesstype: [null],
      businessturnover: ['',Validators.required],
      capitalinvested: ['',Validators.required],
      totalemployees: ['',Validators.required],
      businessage: ['',Validators.required],
    });
  }

  doAction(data: IConsumerFormData) {
    console.log(data);
    this.consumerService.createConsumerDetails(data).subscribe((response) => {
      console.log(response);
      this.message = response.message;
    }, (error) => {
      console.log(error);
      this.errorMessage = error?.error?.message
      if(this.errorMessage === 'Not allowed') {
        this._router.navigate(['/login'])
      }
    })
  }

  changeType(value: string) {
    if(value === 'Retailer') {
      this.actualTypes = this.retailerTypes;
    } else{
      this.actualTypes = []
    }
  }

}
