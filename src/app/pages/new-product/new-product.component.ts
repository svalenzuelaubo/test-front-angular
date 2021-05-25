import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ProductModel } from '../../model/product.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductsService],
})
export class NewProductComponent implements OnInit {
  product:Product;
  constructor(
    private _productsService:ProductsService,
    private router:Router
  ) {
    this.product = new ProductModel();
   }

  ngOnInit(): void {
    
  }

  createProduct(form : NgForm){
    console.log(form);
    if(form.invalid) {return;}
    this._productsService.getProducts().subscribe( data =>{
      this._productsService.updateProduct(this.product);
      alert('producto creado');
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/products');
    }, (err)=>{
        console.log(err);
    });
  }
  listProducts(){
    this.router.navigate(['/products']);
  }
}
