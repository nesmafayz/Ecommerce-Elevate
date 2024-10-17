import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { pipe } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct? :IProduct ;
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductService: ProductService)
  {

  }
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>
    {
      let productId:any = params.get('id');

      this._ProductService.getProductById(productId).subscribe({
        next:(res)=>
        {
          this.selectedProduct = res;
        }

      })
    }
    
    

  })
}
  

}
