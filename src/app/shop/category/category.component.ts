import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  CategoryData;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getAllcategories();
    this.getNewProducts();
    this.getAllBrands();
  }

  getAllcategories(){
    this.http.get('/api/category/getcategoryrelatedalldata').subscribe(this.catCB)
  }
  catCB=(dt)=>{
    this.CategoryData=dt;
    console.log(this.CategoryData)
  }
  getNewProducts(){
    this.http.get('/api/product/getAllProducts').subscribe(this.getNewProductsCB)
  }
  newProduct;
  getNewProductsCB=(dt)=>{
    this.newProduct=dt;
  }
  AllBrands;
  getAllBrands(){
    this.http.get('/api/brand/findAllBrands').subscribe(this.getAllBrandsCB)
  }
  getAllBrandsCB=(dt)=>{
    this.AllBrands=dt;
  }
  gotoProduct(id){
    // alert(id);
    this.router.navigate(['/product-detail',{id:id}])
  }
}
