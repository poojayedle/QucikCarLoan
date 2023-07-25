import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllEnquiriesComponent } from './AllEnquiries/all-enquiries/all-enquiries.component';

import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ReRoutingModule } from './re-routing.module';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';



const croute:Routes=[

{
  path:'all', component:AllEnquiriesComponent
},
{
path:'cibil',component:GetCibilComponent,

},

{
  path:"applyLoan",component:ApplyLoanComponent
}

];

@NgModule({
  declarations: [
    
    AllEnquiriesComponent, 
    GetCibilComponent,
    ApplyLoanComponent
     ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute),
    ReRoutingModule
  ]
})
export class relationalExecutiveModule { }
