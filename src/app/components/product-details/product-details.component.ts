import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Store } from '../../models/store';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  //id ==>url
  //getProductById

  currentId: number = 0;
  // productService=inject(ProductsService)
  product!: Store | undefined;
  //Day6
  allProductIdArray: number[] = [];
  //arr[0]=1
  //arr[1]=66
  currentIndex: number = 0;
  constructor(
    private active: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private locat: Location,
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.currentId = Number(this.active.snapshot.paramMap.get('IdUrl')) || 0; //get id from url

    // // this.product=this.productService.getProductById(this.currentId)

    // let oneProduct = this.productService.getProductById(this.currentId); //   {}
    // if (oneProduct) {
    //   this.product = oneProduct;
    // } else {
    //   this.router.navigate(['**']);
    // }

    // console.log(this.product);

    //Day6

    // this.active.paramMap.subscribe((x) => {
    //   this.currentId = Number(x.get('IdUrl')) || 0;
    //   let onProduct = this.productService.getProductById(this.currentId);
    //   if (onProduct) {
    //     this.product = onProduct;
    //   } else {
    //     this.router.navigate(['**']);
    //   }
    // });
    this.active.paramMap.subscribe((x) => {
      this.currentId = Number(x.get('IdUrl')) || 0;
      let onProduct = this.productService.getProductById(this.currentId);
      if (onProduct) {
        this.product = onProduct;
      } else {
        this.router.navigate(['**']);
      }
   
    });

    this.allProductIdArray = this.productService.getarrayOfIds();
    console.log(this.allProductIdArray);
  }

  //Day6
  //[id1,id2,id3]

  prevFunc() {
    //this.allProductIdArray[index]
    this.currentIndex = this.allProductIdArray.indexOf(this.currentId);
    console.log(this.currentIndex);
    this.router.navigate([
      '/Product',
      this.allProductIdArray[--this.currentIndex],
    ]);
  }
  nextFunc() {
    this.currentIndex = this.allProductIdArray.indexOf(this.currentId);
    console.log(this.currentIndex);
    this.router.navigate([
      '/Product',
      this.allProductIdArray[++this.currentIndex],
    ]);
  }

  goBack() {
    this.locat.back();
  }
}
