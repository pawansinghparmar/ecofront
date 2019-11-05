import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  registerForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  registerFormSubmit(r){
    console.log(r);
    this.auth.auth.createUserWithEmailAndPassword(r.email,r.password).then(function(res){
      console.log(res)
    })



  }


}
