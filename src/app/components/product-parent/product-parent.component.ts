import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { Store } from '../../models/store';
import { log } from 'console';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [FormsModule, ProductsComponent, CommonModule],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.css',
})
export class ProductParentComponent {
  date: Date = new Date();
  doSearchParent: string = '';

  productListInCart: Store[] = [];

  addToCartInParent(prdInCart: Store) {   //{}

  //  console.log(prdInCart);
   
    let obj = this.productListInCart.find(
      (i) => i.productId === prdInCart.productId
    ); //{}

    if (obj) {
      obj.productQuantity++;
    } else {
      this.productListInCart.push({ ...prdInCart, productQuantity: 1 });
    }
  }
}
