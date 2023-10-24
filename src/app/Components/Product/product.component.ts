import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ServicesService } from 'src/app/services/services.service';
import { Services2Service } from 'src/app/services/services2.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id:number=0
  image:string=''
  name:string=''
  price:number=0
  Quantity:String|number=''
  // modalService: any;
  sel:any
  ProductToDel:any
  ProductToDelName:any
  arr:any 
  loading:boolean=true
  
  constructor(public Services: ServicesService ,public Services2: Services2Service) {    
  }
  ngOnInit(){
   setTimeout(()=>{this.loading=false},2999)
    setTimeout(() => {


      this.Services2.GetAll().subscribe({
        next:(response)=>{this.arr=response
          console.log(response);
          
        }
      })
      console.log("all")
    }, 3000);
  


  }
 
openModal(e:any) {
 this.sel=e
 this.ProductToDel=this.Services2.GetById(this.sel).subscribe({
  next:(response)=>{
    this.ProductToDel=response;
    this.ProductToDelName=this.ProductToDel.name;
    console.log(this.ProductToDelName);
  }
 })
}
confirmDel(){
  this.Services2.Remove(this.sel).subscribe({
    next:()=>{
     this.arr=this.arr.filter((product:any)=>product.id!=this.sel)
    }
  })
}



}

