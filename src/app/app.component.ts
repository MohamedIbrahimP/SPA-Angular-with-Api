import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  LogIn: boolean = false;
  Products:boolean=false;
  Home:boolean=false;

  ShowLogIn(x: any) {
    this.LogIn = x;
    this.Products=false;
    this.Home=false;
  }
  ShowProducts(x:any){
    this.Products=x;
    this.LogIn=false;
    this.Home=false;
  }
  ShowHome(x:any){
    this.Home=x;
    this.LogIn=false;
    this.Products=false;
  }
}
