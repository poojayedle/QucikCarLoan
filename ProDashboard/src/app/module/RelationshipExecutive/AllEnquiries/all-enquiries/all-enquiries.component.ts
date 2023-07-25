import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-all-enquiries',
  templateUrl: './all-enquiries.component.html',
  styleUrls: ['./all-enquiries.component.css']
})
export class AllEnquiriesComponent  {
 
  allEnquiry:any;
  constructor(private cs:CommonService){}
  ngOnInit(): void {
    this.cs.getAllJustCreatedEnqury().subscribe(
      (e:any)=>{
        this.allEnquiry=e;
      }
    )
  }
}
