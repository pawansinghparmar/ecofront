import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './shop/category/category.component';
import {ProductDetailComponent} from './shop/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { ProductCheckoutComponent } from './pages/product-checkout/product-checkout.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"shop-cat",component:CategoryComponent},
  {path:"product-detail",component:ProductDetailComponent},
  {path:"login",component:LoginComponent},
  {path:"tracking",component:TrackingComponent},
  {path:"product-checkout",component:ProductCheckoutComponent},
  {path:"shopping-cart",component:ShoppingCartComponent},
  {path:"confirmation",component:ConfirmationComponent},
  {path:"elements",component:ElementsComponent},
  {path:"blog",component:BlogComponent},
  {path:"single-blog",component:SingleBlogComponent},
  {path:"contact",component:ContactComponent},
  {path:"reg",component:RegisterComponent},
  {path:'admin',loadChildren: ()=> import('./addmin/addmin.module').then(m=> m.AddminModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
