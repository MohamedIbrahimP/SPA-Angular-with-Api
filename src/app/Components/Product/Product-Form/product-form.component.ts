import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Services2Service } from 'src/app/services/services2.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
id:number=0
image:string='bootstrap.svg'
name:string=''
price:any=''
Quantity:string|number=''
btn:string=''
product:any;



  constructor( public Services:ServicesService,public ActivatedRoute: ActivatedRoute, public router:Router, public Services2:Services2Service ) {  }
  ngOnInit(){
    // this.id = this.ActivatedRoute.snapshot.params['id'];
   this.ActivatedRoute.params.subscribe({
    next:(params)=> {
      this.id=params['id']
    }
   })
   if(this.id!=0){
    this.Services2.GetById(this.id).subscribe({
      next:(response)=>{
    this.product=response; 
    this.name=this.product.name
    this.image=this.product.image
    this.price=this.product.price
    this.Quantity=this.product.Quantity
      }
    })
   }
    
   
  }
  editProduct(){
      let editedProduct = {
        id:this.id,
        name: this.name,
        image: this.image,
        price: this.price,
        quantity: this.Quantity,
      };
      this.Services2.Edit(this.id,editedProduct).subscribe({
        next:(response)=>{ console.log('Product updated:', response); }
      })
      this.router.navigate(['/products']);
    }
  formOperation(e: any) {
    e.preventDefault();
    let newProduct = {
      name: this.name,
      image: this.image,
      price: this.price,
      quantity: this.Quantity,
    };
    this.Services2.AddNew(newProduct).subscribe({
      next:()=>{console.log('Product added successfully:', newProduct); }
    })
      this.router.navigate(['/products']);
  }
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      this.image = file.name;      
    }



}
