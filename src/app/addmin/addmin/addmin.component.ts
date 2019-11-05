import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmin',
  templateUrl: './addmin.component.html',
  styleUrls: ['./addmin.component.css']
})
export class AddminComponent implements OnInit {
  constructor(private routes:Router) { }

  ngOnInit() {
  }
  adminForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  adminFormSubmit(r){
    console.log(r);
    if(r.email=="test@test.com" && r.username=="test" && r.password=="test" ){
      this.routes.navigate(['/admin/home']);
      localStorage.setItem('token','jhsdahsgd');
    }else{
      alert('user dont have proper credentials')
    }



  }




}
