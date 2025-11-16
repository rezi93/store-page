import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { CartComponent } from './cart/cart.component';
import {TabViewModule} from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { ContactComponent } from './contact/contact.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MenubarModule,
    SidebarModule,
    BadgeModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    CardModule
    
 
   
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
