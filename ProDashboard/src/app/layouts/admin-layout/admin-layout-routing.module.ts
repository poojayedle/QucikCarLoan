import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AllEnquiriesComponent } from 'src/app/module/RelationshipExecutive/AllEnquiries/all-enquiries/all-enquiries.component';

import { SaveUserComponent } from '../save-user/save-user.component';
import { LoanDisbusmentComponent } from 'src/app/module/AccountHead/loan-disbusment/loan-disbusment.component';
import { GetSanctionDetailsComponent } from 'src/app/module/credit-manager/get-sanction-details/get-sanction-details.component';



const routes: Routes = [
  {
    path: 'all', component: AllEnquiriesComponent
  },
  
  {
    path:"saveUser",component:SaveUserComponent
  },
  {
    path:"loanDisbus",component:LoanDisbusmentComponent
  },
  {
    path:"sanctDetails",component:GetSanctionDetailsComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
