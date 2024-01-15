import { Component, NgModule, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct } from '../interface/product';
import { PruductService } from '../service/pruduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: IProduct[] = []
  cartCount: number = 0;
  @Output() cartCountChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private Service: PruductService) {

  }

  ngOnInit(): void {
    this.cartItems=this.Service.getItems();
    this.cartCount = this.cartItems.length;
    this.cartCountChange.emit(this.cartCount);
   
    
  }

  removeitem(item:any){
    this.Service.removeItem(item)
  }
  

 

}
