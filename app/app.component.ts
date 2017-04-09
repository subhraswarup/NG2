import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<div>
        <h1>{{pageTitle}} </h1>
        <div>My Component </div>
    </div>`
})
export class AppComponent{
  pageTitle:string='Acme product management';  
}