import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private http:HttpClient) { }
  ProductID;
  ngOnInit() {
    this.aroute.paramMap.subscribe(r=>{
      this.ProductID=(r.get('id'));
      console.log(this.ProductID)
      var obj={
        id:this.ProductID
      }
      this.http.post('/api/product/getProductdatabyId',obj).subscribe(this.CB)
    })
  }
  Product;
  CB=(dt)=>{
    console.log(dt)
    this.Product=dt;
  }

}
