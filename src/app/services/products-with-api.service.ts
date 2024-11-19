import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../models/store';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  constructor(
    private httpclient: HttpClient //GET , POST , PUT ,PATCH
  ) {}

  getAllProducts(): Observable<Store[]> {
    // return this.httpclient.get<Store[]>('http://localhost:3000/products');
    //http://localhost:3000
    return this.httpclient.get<Store[]>(`${environment.baseUrl}/products`);
  }
  //url by param
  getProductById(prdId: string): Observable<Store> {
    // return this.httpclient.get<Store>(
    //   `http://localhost:3000/products/${prdId}`
    // );
    return this.httpclient.get<Store>(
      `${environment.baseUrl}/products/${prdId}`
    );
  }

  //url query string
  searchBybrand(barnd: string): Observable<Store[]> {
    return this.httpclient.get<Store[]>(
      `${environment.baseUrl}/products?Brand=${barnd}`
    );
  }
}
