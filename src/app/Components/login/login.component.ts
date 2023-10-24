import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './../../services/user-service.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usr:any='';
  usrname:any='';
  pass:string='';
  mess:boolean=false;
  /**
   *
   */
  usernamelocal:any=''


  constructor(public router:Router, public User:UserServiceService) {   }
LogInForm=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,]),
  check:new FormControl()
})

get getusername(){
  return this.LogInForm.controls['username'];
}
get getpassword(){
  return this.LogInForm.controls['password'];
}
get getcheck(){
  return this.LogInForm.controls['check'].value;
}

FnLogin(e:Event){
e.preventDefault();

this.User.GetByUsername(`${this.getusername.value}`).subscribe({
  next:(response)=>{ this.usr=response;
    this.pass=this.usr.password;
    this.usrname=this.usr.username;

    if (this.usrname==`${this.getusername.value}`&&this.pass==`${this.getpassword.value}`) {

      if (this.LogInForm.status=="VALID") {
      if (this.getcheck) {
      localStorage.setItem('username',`${this.getusername.value}`)
      localStorage.setItem('password',`${this.getpassword.value}`)
    }
    if (!this.getcheck) {
    sessionStorage.setItem('username',`${this.getusername.value}`)
    sessionStorage.setItem('password',`${this.getpassword.value}`)
    }
    this.router.navigate(['/home']);
    }
    }else this.mess=true


  }
})
if (this.LogInForm.status=="INVALID")
this.mess=true




}

ngOnInit(){

this.usernamelocal=localStorage.getItem('username');
this.getusername.setValue(this.usernamelocal)
}







  
}

