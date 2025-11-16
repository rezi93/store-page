import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, ICategory } from '../interface/product';
import { PruductService} from '../service/pruduct.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchText: string = "";
  categories: ICategory[] = Object.values(ICategory);

  constructor(private _service: PruductService, private _route: Router, private _serv:CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this._service.getProductList().subscribe(res => {
      this.products = res;
      this.filteredProducts = res; 
    });
  }

  onSearchChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.searchText = query;
    this.filteredProducts = this.products.filter(p =>
      p.title.toLowerCase().includes(query)
    );
  }

  filterByCategory(category: ICategory) {
    this.filteredProducts = this.products.filter(p => p.category === category);
  }

  detailsPage(productID: number) {
    this._route.navigate(['/products', productID]);
  }

  addToCart(product: IProduct) {
  this._serv.addToCart(product, 1);
}
}
