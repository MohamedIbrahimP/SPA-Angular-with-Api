import { Component } from '@angular/core';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductComponent } from './Components/Product/product.component';
import { ProductFormComponent } from './Components/Product/Product-Form/product-form.component';
import { PagenotFoundComponent } from './Components/pagenot-found/pagenot-found.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'login',component:LoginComponent},
  {path: 'products/:id/edit',component: ProductFormComponent},
  {path:'**',component:PagenotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
