import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-sanction-details',
  templateUrl: './sanction-details.component.html',
  styleUrls: ['./sanction-details.component.css']
})
export class SanctionDetailsComponent implements OnInit{

  sanctionRegis:FormGroup;
  loanDetails: any;
  constructor(private fb:FormBuilder,private activeRoute:ActivatedRoute,private cs:CommonService){}
customer:any;
  ngOnInit(): void {
    this.sanctionRegis=this.fb.group({
      custId:[],
      custFirstName:[],
      custLastName:[],
      custContactNo:[],
      custEmailId:[],
      custPANno:[],
      custLoanType:[],
      custLoanAmmount:[],
      custTennureYear:[],
      docData:this.fb.group({
        docId:[],
        pancard:[],
        adharCard:[],
        photo:[],
        signature:[],
        form16:[],
        itr:[]
      }),
      loanDetails:this.fb.group({
        loanId:[],
        loanStatus:[],
        requiredLoanamount:[]
      }),
      address:this.fb.group({
        adrId:[],
        localAddress:[],
        permanentAddress:[],
        pincode:[]
      }),
      bankDetails:this.fb.group({
        bankDetailId:[],
        accountNumber:[],
        bankName:[],
        bankIFSCCode:[],
        accountBalance:[],
        branch:[]

      }),
      sactiondetails:this.fb.group({
        sanctionId:[],
        loanType:[],
        loanAmountSanctioned:[],
        tenureInYearSanctioned:[],
        monthlyEmi:[],
        custEmailId:[],
        disbursementStatus:[],
        sanctionPdf:[]
      })
    })

    this.activeRoute.paramMap.subscribe(
      (param:any)=>{
        let cId:string=param.get("data");
       
       this.cs.getByCustId(cId).subscribe((enq:any)=>{
        console.log(enq)
 this.sanctionRegis.patchValue({
          custId:enq.custId,
          custFirstName:enq.custFirstName,
          custLastName:enq.custLastName,
          custContactNo:enq.custContactNo,
          custEmailId:enq.custEmailId,
          custProfession:enq.custProfession,
         
          requiredLoanamount:enq.requiredLoanamount,
         
          custLoanAmmount:enq.custLoanAmmount,
          custTennureYear:enq.custTennureYear,
      loanDetails:{
        loanId:enq.loanDetails.loanId,
        loanStatus:enq.loanDetails.loanStatus,
        requiredLoanamount:enq.loanDetails.requiredLoanamount
      },
      docData:{
        docId:enq.docData.docId,
        pancard:enq.docData.pancard,
        adharCard:enq.docData.adharCard,
        photo:enq.docData.photo,
        signature:enq.docData.signature,
        form16:enq.docData.form16,
        itr:enq.docData.itr
      },
      address:{
        adrId:enq.address.adrId,
        localAddress:enq.address.localAddress,
        permanentAddress:enq.address.permanentAddress,
        pincode:enq.address.pincode
      },

      bankDetails:{
        bankDetailId:enq.bankDetails.bankDetailId,
        accountNumber:enq.bankDetails.accountNumber,
        bankName:enq.bankDetails.bankName,
        bankIFSCCode:enq.bankDetails.bankIFSCCode,
        accountBalance:enq.bankDetails.accountBalance,
        branch:enq.bankDetails.branch
      },




      
       })
    
      }
    )
  }
)}


sanctionCustomersave(){

    this.cs.saveSCustomer(this.sanctionRegis.value).subscribe()
    window.location.reload()
  }


}
