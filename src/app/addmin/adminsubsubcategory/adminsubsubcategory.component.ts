import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-adminsubsubcategory',
  templateUrl: './adminsubsubcategory.component.html',
  styleUrls: ['./adminsubsubcategory.component.css']
})
export class AdminsubsubcategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
 
  }
 
}
