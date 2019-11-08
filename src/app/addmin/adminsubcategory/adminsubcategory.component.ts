import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminsubcategory',
  templateUrl: './adminsubcategory.component.html',
  styleUrls: ['./adminsubcategory.component.css']
})
export class AdminsubcategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Categories;Catdata;
  public fields={text:'name',value:'id'};
  public placeholder="please select any category"
  ngOnInit() {
    this.getAllCategories();
    this.getAllsubCategories();
  
  }
  getAllCategories(){
    this.http.get('/api/category/getAllCategories').subscribe(this.getAllCat)
  }
  getAllCat=(ct)=>{
    this.Catdata = ct;
    console.log(this.Catdata);

  }

  getAllsubCategories(){
    this.http.get('/api/subcategory/getAllSubCategories').subscribe(this.getallcatecb)
  }
  subCatData;
  getallcatecb=(dt)=>{

    console.log(dt)
     this.subCatData=dt;
     console.log(this.subCatData)

  }
   subcategoryForm = new FormGroup({
    name:new FormControl(''),
    date: new FormControl(Date.now()),
    description: new FormControl(''),
    categoryId:new FormControl('')
  })
  subcategoryFormSubmit(subcategoryvalue){
    console.log(subcategoryvalue)
   this.http.post('/api/subcategory/createSubCategory',subcategoryvalue).subscribe(this.subcreate)
  }
  subcreate=(subcat)=>{
    console.log(subcat)
    if(subcat.id){
    alert("data saved succeffully");
    this.subcategoryForm.reset();
     this.subcategoryForm.get('date').setValue(Date.now());
    // this.subcategoryForm.get('categoryId').setValue('');
    // this.subcategoryForm.get('description').setValue('');
    this.getAllsubCategories();
    }else{
      alert('data upload unsuccessful')
    }

  }
  
  getCatNameById(id){
    this.http.post('/api/subcategory/getCatNameByid',{id:id}).subscribe(this.cc)
  }
cc=(dt)=>{
  return dt.name
}
deleteSubCategorybyId(id){
console.log(id);
this.http.post('/api/subcategory/deleteSubCategorybyid',{id:id}).subscribe(this.deletesubcat)
}
deletesubcat=(res)=>{
  this.getAllsubCategories();
}

editsubcat;

editSubCategory(id){
  console.log(id)
  // this.editsubcat=id.id;
  // this.subname=id.name;
  //  this.subdes=id.description
  
}
cancleSubCategory(){
  this.editsubcat = 1;
}
}
