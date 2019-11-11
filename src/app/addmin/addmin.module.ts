import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddminComponent } from './addmin/addmin.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AdminloginService } from "../service/adminlogin.service";
import { HomeComponent } from './home/home.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { AdminsubcategoryComponent } from './adminsubcategory/adminsubcategory.component';
import { AdminsubsubcategoryComponent } from './adminsubsubcategory/adminsubsubcategory.component';
import { AdminbrandComponent } from './adminbrand/adminbrand.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';

import { DropDownListAllModule } from "@syncfusion/ej2-angular-dropdowns";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [AddminComponent, HomeComponent,AdmincategoryComponent, AdminsubcategoryComponent, AdminsubsubcategoryComponent, AdminbrandComponent, AdminproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AddminComponent},
      {path:"home",component:HomeComponent,canActivate:[AdminloginService]},
      {path:"category",component:AdmincategoryComponent,canActivate:[AdminloginService]},
      {path:"subcategory",component:AdminsubcategoryComponent,canActivate:[AdminloginService]},
      {path:"subsubcategory",component:AdminsubsubcategoryComponent,canActivate:[AdminloginService]},
      {path:"brand",component:AdminbrandComponent,canActivate:[AdminloginService]},
      {path:"product",component:AdminproductComponent,canActivate:[AdminloginService]},
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,DropDownListAllModule,MatInputModule,
    MatSelectModule
  ],
  providers:[AdminloginService]
})
export class AddminModule { }
