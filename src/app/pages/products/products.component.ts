import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products:Product[];
  constructor(
    private _productsService:ProductsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this._productsService.getProducts().subscribe( data =>{
      this.products=data;
    }, (err)=>{
        console.log(err);
    });
  }

  deleteProduct(handle:string){
    this._productsService.deleteProduct(handle);
  }

  editProduct(handle:string){
    this.router.navigate(['/product',handle]);
  }

}
