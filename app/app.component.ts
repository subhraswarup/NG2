import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<div>
        <h1>{{getTitle()}} </h1>
        <pm-products></pm-products>
    </div>`
})
export class AppComponent{
  pageTitle:string='Product management';  
  getTitle(): string {
        return 'Product management';
  }
}