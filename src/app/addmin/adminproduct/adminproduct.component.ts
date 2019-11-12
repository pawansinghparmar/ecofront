import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {

  constructor(private http:HttpClient,private storage:AngularFireStorage) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllProductData();
  }
  ProductForm=new FormGroup({
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    subsubcategoryid:new FormControl(''),
    brandid:new FormControl(''),
    name: new FormControl(''),
    description:new FormControl(''),
    image:new FormControl(''),
    quantity:new FormControl(''),
    price:new FormControl('')
  
   })
   ProductFormSubmit(r){
     console.log(r);
     this.http.post('/api/product/createproduct',r).subscribe(this.ProductFormSubmitCB)
   }
   ProductFormSubmitCB=(dt)=>{
     console.log(dt);
     if(dt._id){
      Swal.fire('product save');
      this.ProductForm.reset();
     }
     this.getAllProductData()
   }

   getAllCategories(){
    this.http.get('/api/category/getcategoryrelatedalldata').subscribe(this.getAllCat)
  }
  Catdata;
  getAllCat=(ct)=>{
    this.Catdata = ct;
  } 
  public fields={text:'name',value:'_id'};
  public placeholder="please select Category";
  filterCategory;
  public subfields={text:'name',value:'_id'};
public subplaceholder="Please select any Sub Category";
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
public brandplaceholder="please select brand";
public brandfields={text:'name',value:'_id'};
brandData;
getBranddata(s){
  console.log(s.value);
  var obj={
    id:s.value

  }
  console.log(obj)
  this.http.post('/api/brand/getbranddatabyid',obj).subscribe(this.brandddcb)
}
brandddcb=(dt)=>{
  this.brandData=dt.getsubsubCategoryBrand;
  console.log(this.brandData)
}
uploadPhoto(event){
  const file = event.target.files[0];
  console.log(file);
  var randomString=Math.floor(Date.now() / 1000);
  const filePath = 'product'+randomString;
  console.log(filePath);
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath,file);
  task.snapshotChanges().pipe(
    finalize(() =>{ var url = fileRef.getDownloadURL()
      url.subscribe(e=>{
        console.log(e)
        this.ProductForm.get('image').setValue(e)
      })
    } )
 )
.subscribe(e=>{
  
})
}

getAllProductData(){
  this.http.get('/api/product/getAllProducts').subscribe(this.getAllProductDataCB)
}
Product;
getAllProductDataCB=(dt)=>{
this.Product=dt;
console.log(this.Product)
}


}
