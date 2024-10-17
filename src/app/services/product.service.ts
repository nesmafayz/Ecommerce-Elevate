import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IProduct>
  {
    return this.http.get<IProduct>(`${this.apiUrl}products`);

  }
  getProductById(id:number):Observable<IProduct>
  {
    return this.http.get<IProduct>(`${this.apiUrl}products/${id}`)
  }
}
