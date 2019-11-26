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
  foods;Catdata;selectedcategoryid;SubCatData;

  ngOnInit() {
    this.getAllCategories();
    this.getAllsubCategories();
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
  } 

  getAllsubCategories(){
    this.http.get('/api/subcategory/getAllSubCategories').subscribe(this.getAllSubCat)
  }
  getAllSubCat=(subct)=>{
      this.SubCatData=subct;
     
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
  console.log(this.subcategoryData);
  
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
 deleteSubSubCategory(id){
  console.log(id);
  this.http.post('/api/subsubcategory/deletesubsubcategorybyid',{id:id}).subscribe(this.deletesubcat)
  }
  deletesubcat=(res)=>{
    this.getAllSubSubCategoryData();
  }
  
  editsubcat;subsubname;subsubdes;subname;catname;creationdate;catid;subcatid;subsubcatid;
  result;subsubcatname;
  editSubSubCategory(id){
    this.http.post('/api/subsubcategory/getsubsubcategorybyid',id).subscribe(this.editsubcat)
   
   this.editsubcat =(res)=>{
    this.result=res;
    console.log(this.result);
    this.catname= this.result.getsCategory;
    this.subsubcatid=this.result.id;
    this.subsubcatname=this.result.name;
    this.subsubdes = this.result.description;
    console.log(this.result.id,this.catname);
    } 
      
    this.openform()
  }
    
    SubSubCategoryEditForm=new FormGroup({
     id:new FormControl(''),
      categoryid:new FormControl(''),
      subcategoryid:new FormControl(''),
      name: new FormControl(''),
      description:new FormControl(''),
      
     });
   
    
   
  updateSubSubCategory(sscobj){
  
    this.SubSubCategoryEditForm.setValue({id:this.subsubcatid,
      categoryid:sscobj.categoryid,
      subcategoryid:sscobj.subcategoryid,
      name:sscobj.name,description:sscobj.description});
   console.log(this.SubSubCategoryEditForm.value);
  
    
   
     this.http.put('/api/subsubcategory/editsubsubcategory',this.SubSubCategoryEditForm.value).subscribe(r=>{
    
     this.getAllSubSubCategoryData();
   })
  }
  




  cancleSubSubCategory(){
    this.editsubcat = 1;
   }





 openform(){
   document.getElementById("showdata").style.display="none";
   document.getElementById("showform").style.display="block";
   
 }
 showdata(){
  document.getElementById("showdata").style.display="block";
  document.getElementById("showform").style.display="none";
  
  }
  }
