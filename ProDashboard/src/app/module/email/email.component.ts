import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  emailsender: any;
  constructor(private cs:CommonService,private router:Router,private activeroute:ActivatedRoute,private fb:FormBuilder){}


  ngOnInit(): void {
    
    this.emailsender=this.fb.group({
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

    this.activeroute.paramMap.subscribe(
      (param:any)=>{
        let enqJson:string=param.get("data");
        let enq:any=JSON.parse(enqJson);
        this.emailsender.patchValue({
          custId:enq.custId,
          custFirstName:enq.custFirstName,
          custLastName:enq.custLastName,
          custContactNo:enq.custContactNo,
          custEmailId:enq.custEmailId,
          custPANno:enq.custPANno,
          custLoanAmmount:enq.custLoanAmmount,
          custTennureYear:enq.custTennureYear
      })
  })
  }


sendEmail() {
this.cs.sendsuccessMail(this.emailsender.value).subscribe();
alert("mail send successfully")
}
sendRejectEmail(){
  this.cs.sendRejectMail(this.emailsender.value).subscribe()
  alert("mail send successfully")
}

 }

