import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-details",
  template: `<div>
<h4>Product Details</h4>
    <p>Here you can find details of the selected product.</p>
    <p *ngIf="product">Name: {{ product.name }}, Price: $ {{ product.price }}</p>
    <p *ngIf="!product">No product selected.</p>
  </div>`,
  imports: [NgIf],
})
export class ProductDetailsComponent  implements OnInit {
  product: { id: number; name: string; price: number } | null = null;
constructor(private route: ActivatedRoute) {

}
  ngOnInit() {
// get the product ID from the route parameters
    const productId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.setProduct(productId);
  }


  // Simulating fetching product details based on route parameter
  setProduct(productId: number) {
    const products = [
      { id: 1, name: "Product A", price: 100 },
      { id: 2, name: "Product B", price: 200 },
      { id: 3, name: "Product C", price: 300 }
    ];
    this.product = products.find(p => p.id === productId) || null;
  }
}