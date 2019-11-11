import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminbrand',
  templateUrl: './adminbrand.component.html',
  styleUrls: ['./adminbrand.component.css']
})
export class AdminbrandComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllData();
    this.getAllBrand();
  }
  brandForm=new FormGroup({
    categoryid:new FormControl(''),
  subcategoryid:new FormControl(''),
  subsubcategoryid:new FormControl(''),
  name: new FormControl(''),
  description:new FormControl('')
  })
  brandFormSubmit(r){
    console.log(r);
//    this.http.post("/api/brand/createBrand",r).subscribe(this.brandcb)
  }
  brandcb=(result)=>{
    console.log(result);
    this.brandForm.reset();
  }
  Catdata;
  getAllData(){
    this.http.get('/api/category/getcategoryrelatedalldata').subscribe(this.getAllCat)
  }
  getAllCat=(ct)=>{
    this.Catdata = ct;
    console.log(this.Catdata)
    
    // this.FilterSubCategory();
  } 
public catfields={text:'name',value:'_id'};
public catplaceholder="Please select any Category";
filterCategory;
subcategoryData
getSubcategories(event){
  console.log(event);
  this.filterCategory = [];
  this.Catdata.forEach(element => {
    if(element['_id']==event.value){
      element["getcategorySubcategory"].forEach(ele=>{
        if(element['_id'] == event.value){
          this.filterCategory.push(ele);
        }
      })
    }
  });
  this.subcategoryData=this.filterCategory;
  console.log(this.subcategoryData)
}
public subcatfields={text:'name',value:'_id'};
public subcatplaceholder="Please select any Sub Category";
getSubSubCategories(s){
console.log(s.value);
this.http.post('/api/subcategory/getallcatforsubcatbyid',{id:s.value}).subscribe(this.getssssssssscb)
}
subsubcatData;
public subsubcatplaceholder="please select any subsubs category";
public subsubcatfields={text:'name',value:'_id'};
getssssssssscb=(res)=>{
  console.log(res)
this.subsubcatData=res["getsubcategorysubsubcategory"];
console.log(this.subsubcatData)
}

getAllBrand(){
  this.http.get("/api/brand/allBrandRelatedData").subscribe(this.getallbrandcb)
}
Brand;
getallbrandcb = (allbranddata)=>{
  console.log(allbranddata);
  this.Brand=allbranddata;
}

}
