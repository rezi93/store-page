import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { PruductService } from '../service/pruduct.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined
  productData: any
  productID!: any

  constructor(private _act: ActivatedRoute,
    private _route: Router, private _http: HttpClient, private service: PruductService) { }


  ngOnInit(): void {
    this.productID = this._act.snapshot.paramMap.get("id");

    this.getProductById(this.productID);

    


  }
  goback() {
    this._route.navigate([''])
  }

  getProductById(productID: any) {
    this.service.getProduct(productID)
      .subscribe(data => { this.productData = data })

  }


}


