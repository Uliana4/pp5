import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule, ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Uliana Kutylovskaya';
}
