import { Component } from '@angular/core';
interface Iobject{
    name: string;
    age: number;
  }
@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})

export class TableInputComponent {
 
  studentname:string=''
  studentage:number= 0
  Alert:string='there is a problem!'
  arr:Iobject[] = [];
  flag:boolean=true;
  flag2:boolean=true;
  flag3:boolean=false;
  
  addNewList() {
    if (this.studentname.length<=2) {
      this.flag=false
    }
    else if (this.studentage<=17){
      this.flag2=false
    }
    else if(this.arr.some(item => item.name==this.studentname && item.age==this.studentage)){
      this.flag3=true;
    }
    else{
      let newstudent: Iobject = {
      name: this.studentname,
      age: this.studentage
    };

    this.arr.push(newstudent);
    this.studentname = '';
    this.studentage = 0;
    }
    
    
  }
  remove(i: number) {
    this.arr = this.arr.filter((st, index) => index != i);
  }
check(){
  this.flag=  (this.studentname.length>=3)
}
check2(){
  this.flag2= (this.studentage>=18)
}
check3(){
  
}

}
