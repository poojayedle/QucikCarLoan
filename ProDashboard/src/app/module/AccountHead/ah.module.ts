import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReRoutingModule } from '../RelationshipExecutive/re-routing.module';


const routes: Routes = [
  {path:'loandisbus',component:LoanDisbusmentComponent}
];
@NgModule({
  declarations: [
    LoanDisbusmentComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ReRoutingModule
    
  ]
})
export class AhModule { }
