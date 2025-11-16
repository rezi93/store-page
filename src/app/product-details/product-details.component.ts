import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { PruductService } from '../service/pruduct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productData: any;
  stars: number[] = [];
  quantity: number = 1;
  darkMode: boolean = false;

  constructor(
    private _act: ActivatedRoute,
    private _route: Router,
    private cart: CartService,
    private service: PruductService
  ) { }

  ngOnInit(): void {
    const productID = this._act.snapshot.paramMap.get("id");
    this.getProductById(productID);

    this.darkMode = localStorage.getItem('darkMode') === 'true';
  }

  getProductById(id: any) {
    this.service.getProduct(id).subscribe(data => {
      this.productData = data;
      this.stars = Array(Math.round(data.rating)).fill(0);
    });
  }

  goback() {
    this._route.navigate(['']);
  }

  increaseQty() { this.quantity++; }
  decreaseQty() { if (this.quantity > 1) this.quantity--; }

 addToCart() {
  this.cart.addToCart(this.productData, this.quantity);
}

  toggleDark() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
  }
}
