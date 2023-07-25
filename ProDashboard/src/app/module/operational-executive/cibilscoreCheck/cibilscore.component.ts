
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-cibilscore',
  templateUrl: './cibilscore.component.html',
  styleUrls: ['./cibilscore.component.css']
})
export class CibilscoreComponent implements OnInit {
 
  allEnquiry:any;
  enqRegis:FormGroup
  constructor(private cs:CommonService,private router:Router){}


  ngOnInit(): void {
    this.cs.getAllEnqury().subscribe(
      (e:any)=>{
        this.allEnquiry=e;
      }
    )}

    checkCibil(e:any){

     this.router.navigateByUrl("/update/"+JSON.stringify(e))
    }
}
