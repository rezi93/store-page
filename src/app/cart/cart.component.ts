import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  totalPrice = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    
    this.cart.cartItems$.subscribe(items => {
      this.cartItems = items.map(item => ({
        ...item,
        qty: item.quantity || 1
      }));

      this.calculateTotal();
    });
  }

  increaseQty(item: any) {
    item.qty++;
    this.updateItem(item);
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.updateItem(item);
    }
  }

  updateItem(item: any) {
    this.cart.updateQuantity(item.id, item.qty);
    this.calculateTotal();
  }

  removeItem(item: any) {
    this.cart.removeItem(item);
  }

  calculateTotal() {
    this.totalPrice = this.cartItems
      .reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
}
