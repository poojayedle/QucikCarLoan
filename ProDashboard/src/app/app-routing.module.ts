import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { OperationalExecutiveModule } from './module/operational-executive/operational-executive.module';
import { relationalExecutiveModule } from './module/RelationshipExecutive/relational-executive.module';
import { EnquiryComponent } from './templates/enquiry/enquiry.component';
import { EmiCalculatorComponent } from './templates/emi-calculator/emi-calculator.component';

import { EmailComponent } from './module/email/email.component';
import { AboutUSComponent } from './templates/about-us/about-us.component';
import { ContactUsComponent } from './templates/contact-us/contact-us.component';

import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AhModule } from './module/AccountHead/ah.module';




const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "log", component: LoginComponent
  },
  {
    path: "enquiry", component: EnquiryComponent
  },
  {
    path: "emi", component: EmiCalculatorComponent
  },
  {
    path: "role", component: AdminLayoutComponent,
    children: [
      {
        path:"ADM",loadChildren:()=>AdminLayoutModule
      },
      {
        path: "RE", loadChildren: () => relationalExecutiveModule
      },
      {
        path: "OE", loadChildren: () => OperationalExecutiveModule
      },
      {
        path: "CM", loadChildren: () => CreditManagerModule
      },
      
      {
        path: "AH", loadChildren: () => AhModule
      },
    ]
  },
  
  {
    path: 'about', component: AboutUSComponent
  },
  {
    path: 'contact', component: ContactUsComponent
  },

  {
    path: 'update/:data', component: EnquiryComponent
  },
  {
    path: 'sendMail/:data', component: EmailComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
