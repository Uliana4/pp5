import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customersList: Customer[] = [];

  addCustomer(customer: Customer){
    this.customersList.push(customer);
    console.log('zawartosc Service:', this.customersList);
  }

  getCustomers() : Customer[]{
    return this.customersList;
  }

  removeCustomer(customer: Customer): Customer[]{
    this.customersList = this.customersList.filter((customer:Customer) => {
      return customer.nip !== customer.nip;
    })
    return this.customersList;
  }
}

