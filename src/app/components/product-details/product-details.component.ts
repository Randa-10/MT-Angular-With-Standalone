import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Store } from '../../models/store';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  //id ==>url
  //getProductById 

  currentId:number=0
// productService=inject(ProductsService)
product!:Store  | undefined
  constructor(
    private active:ActivatedRoute,
    private productService:ProductsService
    ,
    private router:Router

  ){
this.currentId=Number(this.active.snapshot.paramMap.get('IdUrl')) || 0   //get id from url  

// this.product=this.productService.getProductById(this.currentId)

let oneProduct=this.productService.getProductById(this.currentId)  // {}
if (oneProduct) {
  this.product=oneProduct
}else{
this.router.navigate(['**'])
}




console.log(this.product);


  }

}
