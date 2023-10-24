import { Component,HostListener, Output ,EventEmitter ,OnChanges, OnInit } from "@angular/core";
import { ActivatedRoute, Router,NavigationEnd } from "@angular/router";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavBarComponent implements OnInit{
  /**
   *
   */
  constructor( public router: Router,public activatedRoute:ActivatedRoute) {  }
  LogIn:boolean=true;
  Products:boolean=true;
  Home:boolean=true;
  isNavbarScrolled = true;
  routeName:any

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 100) {
      this.isNavbarScrolled = false;
    } else {
      this.isNavbarScrolled = true;
    }
  }
  @Output() ShowHomeEvent=new EventEmitter();
  @Output() ShowLogInEvent = new EventEmitter();
  @Output() ShowProductsEvent = new EventEmitter();
  fireProducts(){
    this.ShowProductsEvent.emit(this.Products)
  }
  fireLogIn(){
    this.ShowLogInEvent.emit(this.LogIn)
  }
  FireHome(){
    this.ShowHomeEvent.emit(this.Home)
  }
ngOnInit(){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.routeName = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || "";
    }
  });
 }

 signout(){
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('password');
  this.router.navigate(['/login'])
 }




}