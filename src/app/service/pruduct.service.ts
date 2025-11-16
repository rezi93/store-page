import { Injectable } from '@angular/core';
import { ICategory, IProduct, IBaseResponsive, IMenuItem } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruductService {

  private cartItems: IProduct[] = [];

  
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  constructor(private _http: HttpClient) {}

 
  getProductList(): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products')
      .pipe(map(res => res.products));
  }


  getProduct(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`https://dummyjson.com/products/${id}`);
  }

  searchProduct(query: string): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products/search', {
      params: { q: query }
    }).pipe(map(data => data.products));
  }

 private allProducts: IProduct[] = [];
private filteredProductsSource = new BehaviorSubject<IProduct[]>([]);
filteredProducts$ = this.filteredProductsSource.asObservable();

setProducts(products: IProduct[]) {
    this.allProducts = products;
    this.filteredProductsSource.next(products);
}

filterProducts(query: string) {
    const filtered = this.allProducts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );
    this.filteredProductsSource.next(filtered);
}

  getProductByCat(category: string): Observable<IProduct[]> {
    return this._http
      .get<IBaseResponsive>(`https://dummyjson.com/products/category/${category}`)
      .pipe(map(data => data.products));
  }

  addToCart(product: IProduct) {
    this.cartItems.push(product);
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCountSource.next(this.cartItems.length);
  }

  getItems(): IProduct[] {
    return [...this.cartItems];
  }

  removeItem(product: IProduct) {
    this.cartItems = this.cartItems.filter(p => p.id !== product.id);
    this.updateCartCount();
  }
  
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price || 0), 0);
  }
}
