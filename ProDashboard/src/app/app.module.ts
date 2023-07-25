import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './nav/side-nav/side-nav.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { EnquiryComponent } from './templates/enquiry/enquiry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatFormFieldModule}from'@angular/material/form-field'
import{MatListModule} from'@angular/material/list'
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { EmailComponent } from './module/email/email.component';
import { AboutUSComponent } from './templates/about-us/about-us.component';
import { ContactUsComponent } from './templates/contact-us/contact-us.component';
import { DocVerificationComponent } from './module/operational-executive/doc-verification/doc-verification.component';

import { SaveUserComponent } from './layouts/save-user/save-user.component';
import { EmiCalculatorComponent } from './templates/emi-calculator/emi-calculator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    AdminLayoutComponent,
    HomeComponent,
    EnquiryComponent,
    AboutUSComponent,
    ContactUsComponent,
   EmailComponent,
   DocVerificationComponent,
   SaveUserComponent,
  EmiCalculatorComponent,

 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
  MatStepperModule,
  MatInputModule,
  CommonModule
  
  

  ],
  exports:[EmiCalculatorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
