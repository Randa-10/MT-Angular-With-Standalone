import { Component } from '@angular/core';
import { Iti } from '../../models/iti';
import { log } from 'console';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
// import { Iti } from '../../models/iti';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//prop
  propTrack:Iti   //{}   [{},{},{}]
  propTrack2:Iti   //{}   [{},{},{}]



constructor( ){
this.propTrack=new Iti("MEARN",["sohag","cairo","item1"],1)   //{}
this.propTrack2=new Iti(".net",["sohag","cairo","item1"],1)  //{}

console.log(this.propTrack);

  }
  //methods


}
