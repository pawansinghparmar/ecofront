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
  public fields={text:'name',value:'_id'};
  public placeholder="please select any category"
  ngOnInit() {
    this.getAllCategories();
    this.getAllsubCategories();
  
  }
  getAllCategories(){
    this.http.get('http://localhost:8080/api/category/getAllCategory').subscribe(this.getAllCat)
  }
  getAllCat=(ct)=>{
    this.Catdata = ct;
    console.log(this.Catdata);

  }

  getAllsubCategories(){
    this.http.get('http://localhost:8080/api/subcategory/findallsubcat').subscribe(this.getallcatecb)
  }
  subCatData;
  getallcatecb=(dt)=>{
    this.subCatData=dt;
    console.log(this.subCatData)

  }
   subcategoryForm = new FormGroup({
    category:new FormControl(''),
    subcategory: new FormControl(''),
    description: new FormControl('')
  })
  subcategoryFormSubmit(subcategoryvalue){
    console.log(subcategoryvalue)
    this.http.post('http://localhost:8080/api/subcategory/create',subcategoryvalue).subscribe(this.subcreate)
  }
  subcreate=(subcat)=>{
    console.log(subcat)
    if(subcat._id){
    alert("data saved succeffully");
    this.subcategoryForm.reset();
    this.getAllsubCategories();
    }else{
      alert('data upload unsuccessful')
    }

  }
  
  getCatNameById(id){
    this.http.post('http://localhost:8080/api/category/getCatNameByid',{id:id}).subscribe(this.cc)
  }
cc=(dt)=>{
  return dt.name
}

}
