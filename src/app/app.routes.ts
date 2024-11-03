import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [

//url ===> localhost:4200
//localhost:4200/home
//localhost:4200/product

//first match wins


{path:'',component:MainComponent,children:[
{path:'',redirectTo:'/home', pathMatch:'full'},
{path:'home',component:HomeComponent,title:"home page"} ,  //localhost:4200/home
{path:'Product',component:ProductsComponent,title:"home page"} ,  //localhost:4200/home
]},


//wild card route
{path:'**',component:NotfoundComponent}

];
