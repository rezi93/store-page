import { Component, OnInit,NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct,  } from './interface/product';
import { ICategory } from './interface/product';
import { PruductService } from './service/pruduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItems: IProduct[] = [];
  cartCount: number = 0;
  Count:number=0;
 
  constructor(private _service: PruductService,
    private _route: Router){
     
    }

    ngOnInit() {
     
    }
   

  updateCartCount(count: number): void {
    this.cartCount = count;
  }

    
}
