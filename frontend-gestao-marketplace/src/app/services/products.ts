import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { INewProductRequest } from '../interfaces/new-product-request';
import { Observable} from 'rxjs';
import { IProductsResponse } from '../interfaces/products-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _httpClient = inject(HttpClient);

  saveProduct(product: INewProductRequest): Observable<INewProductRequest>{
    return this._httpClient.post<INewProductRequest>('http://localhost:3000/api/products', product);

  }

  getProducts(): Observable<IProductsResponse>{
    return this._httpClient.get<IProductsResponse>('http://localhost:3000/api/products');
  }
  
}
