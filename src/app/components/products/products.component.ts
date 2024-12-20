import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '../../models/store';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CardStyleDirective } from '../../directives/card-style.directive';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';

//class decorator   id
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DiscountPipe,
    CardStyleDirective,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  //
  productProp!: Store[]; //[{},{}]

  showImge: boolean = true;
  userName: string = 'ali';
  //1
  //*Day5
  constructor(
    private productServiceSTatic: ProductsService,
    private productWithAPI: ProductsWithApiService
  ) {
    // this.productProp=
    // [
    //   {
    //     productId: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 2,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 3,
    //     productName: 'Apple iPhone 13',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 4,
    //     productName: 'Samsung Galaxy ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 5,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 6,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId:7,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 3,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 8,
    //     productName: 'Reno 11F',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId:9,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    // ];
    // console.log(this.productProp);
  }

  //2
  ngOnInit(): void {
    this.productListAfterFilter = this.productProp;

    //Day4
    //  this.productListAfterFilter=this.productServiceSTatic.getAllProduct()

    //Day7

    this.productWithAPI.getAllProducts().subscribe({
      next: (data) => {
        // console.log(data);
        this.productListAfterFilter = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.productProp);
  }

  //methodes
  toggle() {
    this.showImge = !this.showImge;
  }

  //day3  filter

  //2  as func

  productListAfterFilter: Store[] = [];
  //property decorator
  @Input() set doSearchfromChild(val: string) {
    // console.log(val);
    // console.log(this.perfromfilter(val));
    // this.productListAfterFilter=this.perfromfilter(val)
    //Day5
    // this.productListAfterFilter=this.productServiceSTatic.perfromfilter(val)

    //day7
    this.productWithAPI.getAllProducts().subscribe((data) => {
      this.productListAfterFilter = data.filter((prd: Store) =>
        prd.productName.toLowerCase().includes(val)
      );
    });
  }

  //1

  // perfromfilter(filterValue:string):Store[]{
  //   filterValue=filterValue.toLowerCase()
  //   return this.productProp.filter((prd:Store)=>
  //     prd.productName.toLowerCase().includes(filterValue)
  // )
  // }

  //*********************Day5**********************************************************/

  //creat event  ==> @outPut
  // from child to parent

  @Output() productInCart: EventEmitter<Store> = new EventEmitter<Store>(); //{ prd }

  addToCartFromChild(prd: Store) {
    //{} prd

    // console.log(prd);

    this.productInCart.emit(prd); //to fire
  }
}
