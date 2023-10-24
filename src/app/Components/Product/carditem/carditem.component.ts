import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductList } from 'src/app/Models/product-list';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent {
  constructor(public router: Router,public Services:ServicesService) {   }
isButtonVisible = false;
productToDelete: string = '';
@Input() item:IProduct={id:0,image:'',name:'',price:0,quantity:''}
id:number=0
image:string=''
name:string=this.item.name
price:number=0
Quantity:string|number=''
btn:string=''


selectedimage:string=''
  showBtn() {
    this.isButtonVisible = !this.isButtonVisible;
  }
  openDeleteModal() {
    let objToDelete= this.Services.getProductById(this.id);
    if(objToDelete){
    this.productToDelete =objToDelete?.image;
}  
  }
 
 ngOnInit(){
this.id=this.item.id
this.image=this.item.image
this.name=this.item.name
this.price =this.item.price
this.Quantity =this.item.quantity
this.productToDelete=this.item.name

  if (this.Quantity===0) {
    this.Quantity='No Product Avaliable'
    this.btn='Sold Out'
  }
  else if (this.Quantity===1){
    this.Quantity='Only One Product'
    this.btn='Buy Now'
  } 
  else{
    this.Quantity='Quantity: '+this.Quantity
     this.btn='Buy Now'
   }
    
  }

@Output()Showdelevent =new EventEmitter()
ShowDel(){
this.Showdelevent.emit(this.id)
}









}







