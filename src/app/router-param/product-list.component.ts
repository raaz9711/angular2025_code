import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-product-list",
  template: `
<h4>Product List</h4>
    <p>Here you can find a list of products.</p>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} -  $ {{product.price }}
        <a [routerLink]="['/product', product.id]">View Details</a>
      </li>
    </ul>
    <p>Click on a product to view details.</p>
  `,
  imports: [NgFor,RouterLink],
})
export class ProductListComponent {
    products = [
        { id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 200 },
        { id: 3, name: "Product C", price: 300 }
    ];
}
