import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSanctionDetailsComponent } from './get-sanction-details/get-sanction-details.component';
import { SanctionDetailsComponent } from './sanction-details/sanction-details.component';
import { CustomerVerificationComponent } from './customer-verification/customer-verification.component';


const croute:Routes=[
  // {
  //   path: "apprvdform", component:ApprovedFormsComponent,
    
  // },
  {
    path:"genSanction",component:GetSanctionDetailsComponent
  },
  {
    path:"sanctDetails/:data",component:SanctionDetailsComponent
  },
  {
    path:"custVerify",component:CustomerVerificationComponent,
    children:[
      // {path:'genSanction',component:GetSanctionDetailsComponent}
      // {
      //   path:"sanctDetails/:data",component:SanctionDetailsComponent
      // },
    ]
  }
 
];

@NgModule({
  declarations: [
   
    GetSanctionDetailsComponent,
    SanctionDetailsComponent,
CustomerVerificationComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute)
  ],
  
})
export class CreditManagerModule { }
