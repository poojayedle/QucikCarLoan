import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CibilscoreComponent } from './cibilscoreCheck/cibilscore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReRoutingModule } from '../RelationshipExecutive/re-routing.module';
import { DocVerificationComponent } from './doc-verification/doc-verification.component';


const croute:Routes=[
  {path:'docverification',component:DocVerificationComponent},
  {path:'cibilScore',component:CibilscoreComponent}
 
]

@NgModule({
  declarations: [
    
    CibilscoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute),
    ReRoutingModule
  ]
})
export class OperationalExecutiveModule { }
