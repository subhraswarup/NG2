import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector:'my-app',
    template:`<div>
        <h1>{{getTitle()}} </h1>
        <pm-products></pm-products>      
    </div>`,
    providers:[ ProductService ]
})
export class AppComponent{
  pageTitle:string='Product management';  
  getTitle(): string {
        return 'Product management';
  }
}