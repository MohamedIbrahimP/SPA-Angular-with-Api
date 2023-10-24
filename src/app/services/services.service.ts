import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductList } from '../Models/product-list';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  arr:IProduct[]=[] ;

  constructor() { }
  getAllProducts(): IProduct[] {
    return ProductList;
  }

  addNewProduct(product: any) {
    ProductList.push(product);
  }
  getProductById(productId: number):IProduct| undefined {
    return ProductList.find((product) => product.id == productId);
  }
  editProduct(productId: number,product: any) {
  this.deleteProduct(productId)
  this.addNewProduct(product)
}
deleteProduct(ProductId: number) {
  const productToRemove = ProductList.findIndex((product) => product.id === ProductId);
  if (productToRemove+1) {
    ProductList.splice(productToRemove, 1);
  }
}


  
}
