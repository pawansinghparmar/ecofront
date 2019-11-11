import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { NewArrivalComponent } from './shared/new-arrival/new-arrival.component';
import { ShippingDetailComponent } from './shared/shipping-detail/shipping-detail.component';
import { InstagramPhotoComponent } from './shared/instagram-photo/instagram-photo.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './shop/category/category.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { ProductCheckoutComponent } from './pages/product-checkout/product-checkout.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { ContactComponent } from './contact/contact.component';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment.prod';
import { RegisterComponent } from './register/register.component';
import { AddminModule } from './addmin/addmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeatureComponent,
    NewArrivalComponent,
    ShippingDetailComponent,
    InstagramPhotoComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    ProductDetailComponent,
    LoginComponent,
    TrackingComponent,
    ProductCheckoutComponent,
    ShoppingCartComponent,
    ConfirmationComponent,
    ElementsComponent,
    BlogComponent,
    SingleBlogComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    AngularFireModule.initializeApp(environment.firbase),
    AngularFireAuthModule,
    AddminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
