import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ProductsService {
  private url = 'http://localhost:3000/api/products';//Aqui la url del servicio

  constructor(private http:HttpClient) {
  
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`).pipe(
      map(resp =>{
        return resp;
      })
    )
    //return this.products;
  }

  getProduct(handle: string): Observable<Product>{
    return this.http.get<Product>(`${this.url}/`+handle).pipe(
      map(resp =>{
        return resp;
      })
    )
  }

  deleteProduct(handle: string): any{
    return this.http.delete(`${this.url}/`+handle)
        .subscribe({
            next: data => {
              return 'producto eliminado';
            },
            error: error => {
              return 'error al eliminar producto';
            }
      });
  }

  updateProduct(product:Product) :any{
    return this.http.post(`${this.url}`,product).subscribe({
      next: data => {
        return 'producto actualizado';
      },
      error: error => {
        return 'error al actualizar producto.';
      }
});
  }

}

export interface Product{
  handle: string,
  title: string,
  description: string,
  sku: number,
  grams: number,
  stock: number,
  price: number,
  comparePrice: number,
  barcode: number,
  createdAt: string,
  updatedAt: string
}
