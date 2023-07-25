import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-loan-disbusment',
  templateUrl: './loan-disbusment.component.html',
  styleUrls: ['./loan-disbusment.component.css']
})
export class LoanDisbusmentComponent implements OnInit{

  GetAllData:Array<any>;

constructor(private cs:CommonService){}

  ngOnInit(): void {
    this.cs.getAllCust().subscribe(
      (c:any)=>{
        
        this.GetAllData=c;
      }
    )
    this.GetAllData.filter(c=>c.sactiondetails!=null);
      
  }


  LoanDisburse(custId:any){

    this.cs.LoanDisburse(custId).subscribe();
    alert("Loan Transfered To Customer Successfully!!!!!!")
    window.location.reload()
  }
}
