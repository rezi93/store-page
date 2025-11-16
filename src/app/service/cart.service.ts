import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>(this.loadCart());
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  loadCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  saveCart(items: any[]) {
    localStorage.setItem('cart', JSON.stringify(items));
    this.cartItems.next(items);
  }

  addToCart(product: any, qty: number = 1) {
    const items = this.loadCart();
    const exist = items.find((x: any) => x.id === product.id);

    if (exist) {
      exist.quantity += qty;
    } else {
      items.push({ ...product, quantity: qty });
    }

    this.saveCart(items);
  }

  updateQuantity(id: number, qty: number) {
    const items = this.loadCart();
    const item = items.find((x: any) => x.id === id);
    if (item) {
      item.quantity = qty;
      this.saveCart(items);
    }
  }

  removeItem(item: any) {
    const updated = this.loadCart().filter((x: any) => x.id !== item.id);
    this.saveCart(updated);
  }
}
