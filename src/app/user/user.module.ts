import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"user",component:UserComponent}
    ]),
    HttpClientModule,
    
  ],
  providers:[UsersService]
})
export class UserModule { }
