import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService :CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  addCustomer(form:NgForm){
    if(form.value._id){
      this.customerService.putCustomer(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getCustomers();
      });
    }else{
    this.customerService.postCustomer(form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getCustomers();
    });
  }
  }

  // obtener datos de los empleados
  getCustomers(){
    this.customerService.getCustomers()
    .subscribe(res => {
      this.customerService.customers = res as Customer[];
      console.log(res);
    });
  }

  editCustomer(customer: Customer){
    this.customerService.selectedCustomer = customer;
    this.customerService.putCustomer(customer);
  }

  deleteCustomer(_id:string){
    this.customerService.deleteCustomer(_id)
    .subscribe(res =>{
      this.getCustomers();
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.customerService.selectedCustomer = new Customer();
    }
  }
}

