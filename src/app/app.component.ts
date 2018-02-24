import { Component } from "@angular/core/";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class='container-fluid'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/products']">Product List</a></li>
        </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent{
  pageTitle: string = "Acme Product Management";
}