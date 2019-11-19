import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AngularFireAuth,private http:HttpClient,private routes:Router) { }

  ngOnInit() {
  }
  name;

  registerForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.minLength(6))
  })
  registerFormSubmit(r){
    console.log(r);
    if((r.name==='')||(r.email==='')||(r.password==='')){
      Swal.fire("Please Fill All Required Fields")
    }
    else{
    this.auth.auth.createUserWithEmailAndPassword(r.email,r.password).then((res)=>{
     res.user.updateProfile({
       displayName:r.name
     }).then(()=>{
       this.name=r.name;
       var objj={
         name:r.name,
         password:r.password,
         email:r.email,
         userid:res.user.uid
       }
       console.log(objj)
      this.http.post('/api/users/register',objj).subscribe(this.registerFormCB)
     })


    })



  }


  }
  registerFormCB=(dt)=>{
if(dt._id){
  Swal.fire('User Created Successfully')
  console.log(dt)
  this.registerForm.reset();
  this.routes.navigate(['../user/user'])
}
  }

  
  
}
