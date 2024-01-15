import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct,IMenuItem,IBaseResponsive } from '../interface/product';
import { PruductService } from '../service/pruduct.service';
import {InputTextModule} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product:IProduct[]=[];
  category: IMenuItem[]=[]
  
  
  
  

  constructor(private _service: PruductService,
    private _route: Router){
     
      
      
    }

    ngOnInit() {
      this.getproduct();
      
    

    }

    

    getproduct(){
      this. _service.getProductList().subscribe((result:IProduct[])=>{
        this.product=result
        console.log( this.product)
      })
    }

    detailsPage(productID:number){
   this._route.navigate(['/products/',productID])
   
   
    }

    catPage(category:any){
      this._route.navigate(['/category/',category])
      
      
       }

       handleChange(e:any) {
        var index = e.index;
    }

   


    addToCart(product:IProduct): void{
      this._service.addToCart(product);
      alert('product successfully add to cart');
   
    }

   

    
    


  

}


