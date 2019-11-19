import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AngularFireAuth) { }

  ngOnInit() {
  }
  getAllFireaseUsers(){
   
  }
}
