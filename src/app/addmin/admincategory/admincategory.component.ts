import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {FormGroup,FormControl  } from "@angular/forms";
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllCategories();
  }

  categoryForm  = new FormGroup({
    category: new FormControl(''),
    description:new FormControl('')
  });
  categoryFormSubmit(c){

   console.log(c)
   this.http.post('http://localhost:8080/api/category/create',c).subscribe(this.creatcb)
  }
  creatcb=(result)=>{
    console.log(result);
    if(result._id){
      alert("Category Added Successfully")
      this.categoryForm.reset()
      this.getAllCategories();
    }else{
      alert("Operation Failed!")
    }
  }
getAllCategories(){
  this.http.get('http://localhost:8080/api/category/getAllCategory').subscribe(this.save)
}
Cat;
save=(result)=>{
console.log(result);
this.Cat= result;
}
deleteCategorybyId(id){
  console.log(id)
  this.http.post('http://localhost:8080/api/category/deletebyid',{id:id}).subscribe(this.deletecb)
}
deletecb =(res)=>{
this.getAllCategories();
}

}
