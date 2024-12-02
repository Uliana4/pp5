import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceRoutingModule } from '../invoice-routing.module';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerFormComponent
  ],
  exports: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
