import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService],
})
export class ProductComponent implements OnInit {
  product:Product;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _productsService:ProductsService,
    private router:Router) { 
      this.activatedRoute.params.subscribe(params => {
        this._productsService.getProduct(params['handle']).subscribe( data =>{
          this.product=data;
        }, (err)=>{
            console.log(err);
        });
      });
    }

  ngOnInit(): void {
    
  }

  updateProduct(form : NgForm){
    if(form.invalid) {return;}

    this._productsService.getProducts().subscribe( data =>{
      this._productsService.updateProduct(this.product);
      alert('producto actualizado');
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
    }, (err)=>{
        console.log(err);
    });
  }

}
