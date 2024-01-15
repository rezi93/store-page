import { Injectable } from '@angular/core';
import { ICategory, IProduct, IBaseResponsive,IMenuItem } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, concatMap, Subject,BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


type NewType = Number;

@Injectable({
  providedIn: 'root'
})
export class PruductService {
 
  productID!: any
  items: IProduct[] = []
  product: IProduct[] = [];
  productData: any
  item=new BehaviorSubject<any>([])
  category:IMenuItem[]=[]

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }
  getProductList(): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products').pipe(
      tap(result => result),
      map(data => data.products)
    )
  }


  getProduct(id: any): Observable<IProduct[]> {

    return this._http.get<IProduct[]>('https://dummyjson.com/products/' + id + '/ ')
  }

  searchProduct(category: any): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products/search', {
      params: { q: category }
    }).pipe(map(data => data.products))
  }

 
  
  addToCart(product: IProduct) {
    this.items.push(product)
    
   
    console.log(this.items)
    

  }

  getItems() {
    
    return this.items
  }

  getTotalPrice():number{
let grandtotal=0;
this.items.map((a:any,index:any)=>{
  grandtotal+=a.total;
  
})
return grandtotal;
  }

 

 

  removeItem(product:any){
    this.items.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.items.splice(index,1)
      }
    })
  }


  getProductByCat(category:any): Observable<IProduct[]> {

    return this._http.get<IProduct[]>('c/categories/'+category+'/ ').pipe(map(data => data))
  }

}
