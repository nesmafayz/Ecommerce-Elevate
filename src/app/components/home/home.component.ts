import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { TruncatePipe } from '../../pipe/truncate.pipe';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe, RouterLink, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  isLoade:boolean=true;

  constructor(private _ProductService: ProductService) {}

  ngOnInit(): void {
    this.GetAllProducts();
  }

  GetAllProducts() {
    this._ProductService.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res;
        this.isLoade = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  } 
}
