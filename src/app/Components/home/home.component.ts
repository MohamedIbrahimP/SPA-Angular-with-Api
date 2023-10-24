import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
user:any='M';

 BookingForm =new FormGroup({
  selectTown:new FormControl(),
  people:new FormControl(),
  days:new FormControl(),
  

 })
  ngOnInit(){
    this.user = sessionStorage.getItem('username');
    this.user = localStorage.getItem('username');
console.log(this.user);

  }
 
 








}
