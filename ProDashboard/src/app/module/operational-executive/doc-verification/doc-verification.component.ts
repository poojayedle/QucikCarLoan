import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-doc-verification',
  templateUrl: './doc-verification.component.html',
  styleUrls: ['./doc-verification.component.css']
})
export class DocVerificationComponent implements OnInit{


  getAllCustData: any;


  constructor(private cs:CommonService){}


  ngOnInit(): void {
    this.cs.getAllCust().subscribe(
      (c:any)=>{
        this.getAllCustData=c;
      }

    )
  }

  setStatusVerified(custId:number){
this.cs.setStatusVerified(custId).subscribe();
window.location.reload()
  }

  // generateSanctionLetter(){
  //   this.router.navigateByUrl("/SanctionLetter")
  // }
}
