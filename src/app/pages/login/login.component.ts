import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AngularFireAuth, private http:HttpClient,private routes:Router) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    email:new FormControl('',Validators.email),
    password: new FormControl('',Validators.required)
  })
  loginFormSubmit(ud){
    console.log(ud);
    if(ud.email ===""){
      Swal.fire("Please Enter your User Id")
    }else if(ud.password===""){
      Swal.fire("Please Enter password")
    }else{
      this.http.post('/api/users/finduser',ud).subscribe(this.loginFormCB)
    }

  }
  loginFormCB = (udt)=>{
    if(udt){
      console.log(udt);
      this.loginForm.reset();
  this.routes.navigate(['../user/user'])

    }
  }
}
