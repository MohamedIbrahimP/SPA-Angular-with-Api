import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ NavBarComponent } from './Components/NavBar/navbar.component'
import { FooterComponent } from './Components/Footer/footer.component';
import { TableInputComponent } from './Components/table-input/table-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarditemComponent } from './Components/Product/carditem/carditem.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductComponent } from './Components/Product/product.component';
import { ProductFormComponent } from './Components/Product/Product-Form/product-form.component';
import { PagenotFoundComponent } from './Components/pagenot-found/pagenot-found.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: 
  [
    AppComponent,
    NavBarComponent,
    FooterComponent, 
    TableInputComponent, 
    CarditemComponent,
     LoginComponent, 
     ProductComponent, 
     ProductFormComponent, 
     PagenotFoundComponent, 
     HomeComponent
      
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
