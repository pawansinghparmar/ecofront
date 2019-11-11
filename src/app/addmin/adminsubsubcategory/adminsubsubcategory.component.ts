import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-adminsubsubcategory',
  templateUrl: './adminsubsubcategory.component.html',
  styleUrls: ['./adminsubsubcategory.component.css']
})
export class AdminsubsubcategoryComponent implements OnInit {
test;
public fields={text:'name',value:'_id'};
public subfields={text:'name',value:'_id'};
public placeholder="please select any category";
public subplaceholder="please select any Subcategory"
  constructor(private http:HttpClient) { }
  foods;Catdata;selectedcategoryid;

  ngOnInit() {
    this.getAllCategories();
    this.getAllSubSubCategoryData();
    // this.foods=[ {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'}]
  }
  getAllCategories(){
    this.http.get('/api/category/getcategoryrelatedalldata').subscribe(this.getAllCat)
  }
  getAllCat=(ct)=>{
    this.Catdata = ct;
    
    // this.FilterSubCategory();
  } 
  subcategoryData;
filterCategory = [];
// subcategoryData
 check(event){
  this.filterCategory = [];
  this.Catdata.forEach(element => {
    if(element['_id'] == event.value){
      element['getcategorySubcategory'].forEach(ele => {
        if(element['_id'] == event.value){
          this.filterCategory.push(ele);
        }
      });
    }
  });
  
  this.subcategoryData=this.filterCategory;
  
 }



 SubSubCategoryForm=new FormGroup({
  categoryid:new FormControl(''),
  subcategoryid:new FormControl(''),
  name: new FormControl(''),
  description:new FormControl('')

 })
 SubSubCategoryFormSubmit(r){
  
  this.http.post('/api/subsubcategory/createsubsubCategories',r).subscribe(this.subsubcatcb)
 }
 SubSubCategoryData;
 subsubcatcb=(result)=>{
   if(result._id){
    this.getAllSubSubCategoryData(); 
    Swal.fire('Your Sub Sub Category Has beed Saved Successfully');
     this.SubSubCategoryForm.reset();

   }
 }

 getAllSubSubCategoryData(){
   this.http.get('/api/subsubcategory/getAlsubsubCategories').subscribe(this.getallsubsubscatdatacb)
 }
 getallsubsubscatdatacb=(res)=>{
   console.log(res)
   this.SubSubCategoryData=res;
 }
}
