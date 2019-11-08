import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  CategoryData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllcategories();
  }

  getAllcategories(){
    this.http.get('/api/category/getcategoryrelatedalldata').subscribe(this.catCB)
  }
  catCB=(dt)=>{
    this.CategoryData=dt;
    console.log(this.CategoryData)
  }
}
