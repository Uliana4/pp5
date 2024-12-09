import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
  ],
  exports: [
    CustomerFormComponent,
    CustomerListElementComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
  ]
})
export class InvoiceModule { }
