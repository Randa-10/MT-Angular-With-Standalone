import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserTemplateFormComponent } from './components/user-template-form/user-template-form.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
  //url ===> localhost:4200
  //localhost:4200/home
  //localhost:4200/product

  //first match wins

  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'home page' }, //localhost:4200/home
      {
        path: 'Product',
        component: ProductParentComponent,
        title: 'product page',
        canActivate: [authGuard],
      }, //localhost:4200/home
      {
        path: 'Product/:IdUrl',
        component: ProductDetailsComponent,
        title: 'details page',
      }, //:IdUrl
      {
        path: 'signup',
        component: UserTemplateFormComponent,
        title: 'details page',
      }, //:IdUrl
    ],
  },

  //wild card route
  { path: '**', component: NotfoundComponent },
];
