import { Component, OnInit } from '@angular/core';
import { Iti } from '../../models/iti';
import { log } from 'console';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../services/products.service';
import { UserAuthService } from '../../services/user-auth.service';
// import { Iti } from '../../models/iti';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
//prop
  propTrack:Iti   //{}   [{},{},{}]
  propTrack2:Iti   //{}   [{},{},{}]

isuserlogged!:boolean

constructor( private prodct:ProductsService  , private userAuth:UserAuthService){
this.propTrack=new Iti("MEARN",["sohag","cairo","item1"],1)   //{}
this.propTrack2=new Iti(".net",["sohag","cairo","item1"],1)  //{}

console.log(this.propTrack);

  }
  ngOnInit(): void {
   this.isuserlogged=this.userAuth.isUserLogged;
  }
  //methods

  login(){
this.userAuth.login("randa@gmail","123456")
this.isuserlogged=this.userAuth.isUserLogged;

  }

  logout(){
this.userAuth.logout()
this.isuserlogged=this.userAuth.isUserLogged;

  }
}
