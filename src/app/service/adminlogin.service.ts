import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AdminloginService implements CanActivate  {

  constructor() { }

  canActivate(){
    var l=localStorage.getItem('token');
    console.log(l)
    if(l){
      return true
    }else{
      return false
    }

  }
}
