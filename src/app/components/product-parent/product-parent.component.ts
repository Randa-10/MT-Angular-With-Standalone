import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [FormsModule,ProductsComponent,CommonModule],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.css'
})
export class ProductParentComponent {

  date:Date=new Date()
  doSearchParent:string=''
}
