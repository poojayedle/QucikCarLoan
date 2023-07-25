import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
  constructor(private fb:FormBuilder,
    public comSer:CommonService,private router:Router,private activeRoute:ActivatedRoute){}

  enqRegis:FormGroup;


  ngOnInit(): void {
    this.enqRegis=this.fb.group({
      custId:[],
      custFirstName:[],
      custLastName:[],
      custContactNo:[],
      custEmailId:[],
      custPANno:[],
      custLoanType:[],
      custLoanAmmount:[],
      custTennureYear:[]
    })

    this.activeRoute.paramMap.subscribe(
      (param:any)=>{
        let enqJson:string=param.get("data");
        let enq:any=JSON.parse(enqJson);
        this.enqRegis.patchValue({
          custId:enq.custId,
          custFirstName:enq.custFirstName,
          custLastName:enq.custLastName,
          custContactNo:enq.custContactNo,
          custEmailId:enq.custEmailId,
          custPANno:enq.custPANno,
         
          custLoanAmmount:enq.custLoanAmmount,
          custTennureYear:enq.custTennureYear
        })
      }
    )
  }


  onRegisterEnquiry(){

    if(this.enqRegis.controls['custId'].value>0){
      alert("Cibil check SuccessFully!!!")
      this.comSer.checkCibil(this.enqRegis.value).subscribe()
      this.router.navigateByUrl('/dash/oe/check_cibil')
    }
    
    else{
    this.comSer.createEnquiry(this.enqRegis.value).subscribe(
      (response:any)=>{
        if(response!=null){
          alert("Enquiry data inserted SuccessFully!!!")
          this.router.navigateByUrl('/enquiry')
          this.enqRegis.reset();
        }
      }
    );}
  }

}
