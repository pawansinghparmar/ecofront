import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {FormGroup,FormControl  } from "@angular/forms";
import{HttpClient} from '@angular/common/http';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('running on ng onibit')
    this.getAllCategories();
  }

  categoryForm  = new FormGroup({
    name: new FormControl(''),
    description:new FormControl(''),
    creationDate:new FormControl(Date.now())
  });
  categoryFormSubmit(c){

   console.log(c)
 this.http.post('/api/category/createCategory',c).subscribe(this.creatcb)
  }
  creatcb=(result)=>{
    console.log(result);
    if(result.id){
    
      Swal.fire({
        title:"Your Category is saved",
        text:"Your Category Name is   "+result.name,
      
      })

      
     this.categoryForm.reset()
     this.categoryForm.get('creationDate').setValue(Date.now())
      this.getAllCategories();
    }else{
      alert("Operation Failed!")
    }

  }
getAllCategories(){
  this.http.get('/api/category/getAllCategories').subscribe(this.save)
}
Cat;
save=(result)=>{
console.log(result);
this.Cat= result;
}
deleteCategorybyId(id){
  console.log(id)
  this.http.post('/api/category/deleteCategorybyid',{id:id}).subscribe(this.deletecb)
}
deletecb =(res)=>{
this.getAllCategories();
}

editstat;

editCategory(id){
  console.log(id)
  this.editstat=id.id;
  this.ename=id.name;
   this.edes=id.description
  
}
ename;edes;
saveCategory(){
  // this.editstat=1;
  console.log(this.ename,this.edes);
  var obj={
    name:this.ename,
    description:this.edes,
    creationDate:Date.now(),
    id:this.editstat
  }
console.log(obj)
  this.http.post('/api/category/editCategory',obj).subscribe(r=>{
    this.editstat=1;
  this.getAllCategories();  
  
  })

}
cancle(){
  this.editstat=1;
}

}
