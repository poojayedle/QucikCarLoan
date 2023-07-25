import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  // cregister: FormGroup
  // selectpan: any;
  // selectadharcard: any;
  // selectphoto: any;
  // selectsignature: any;
  // selectform16: any;
  // selectitr: any;
  // selectGuranterPan: any
  // constructor(private cs: CommonService, private fb: FormBuilder, private actiRouter: ActivatedRoute) { }

  // step: number = 1;

  // previous() {
  //   this.step = this.step - 1;
  // }
  // next() {
  //   this.step = this.step + 1;
  // }

  // ngOnInit() {
  //   this.cregister = this.fb.group({

  //     customerdetails: this.fb.group({

  //       custId: 0,
  //       custFirstName: this.fb.control(''),
  //       custLastName: this.fb.control(''),
  //       custContactNo: this.fb.control(0),
  //       custEmailId: this.fb.control(''),
  //       custGender: this.fb.control(''),
  //       custProfession: this.fb.control(''),

  //     }),
  //     doc: this.fb.group({
  //       docId: this.fb.control(0),
  //       pancard: this.fb.control(''),
  //       itr: this.fb.control(''),
  //       adharCard: this.fb.control(''),
  //       photo: this.fb.control(''),
  //       signature: this.fb.control(''),
  //       form16: this.fb.control(''),
  //       guarantorPancard: this.fb.control('')
  //     }),
  //     addr: this.fb.group({
  //       adrId: this.fb.control(0),
  //       localAddress: this.fb.control(''),
  //       permanentAddress: this.fb.control(''),
  //       pincode: this.fb.control(0),

  //     }),

  //     bank: this.fb.group({
  //       bankDetailId: this.fb.control(0),
  //       bankName: this.fb.control(''),
  //       accountNumber: this.fb.control(''),
  //       bankIFSCCode: this.fb.control(''),
  //       accountBalance: this.fb.control(''),
  //       branch: this.fb.control('')
  //     }),



  //     loan: this.fb.group({
  //       loanId: this.fb.control(0),
  //       loanAmount: this.fb.control(''),
  //       interestRate: this.fb.control(0),
  //       loanTenure: this.fb.control(''),
  //       emi: this.fb.control(''),

  //     }),

  //     sanctionDetails: this.fb.group({

  //       loanAmountSanctioned: this.fb.control(0),
  //       tenureInYearSanctioned: this.fb.control(0),
  //       monthlyEmi: this.fb.control(0),

  //     }),
  //   })
  // }
 


  // onSelectPancard(event: any) {
  //   this.selectpan = event.target.files[0];
  // }
  // onSelectAdharcard(event: any) {
  //   this.selectadharcard = event.target.files[0];
  // }
  // onSelectPhoto(event: any) {
  //   this.selectphoto = event.target.files[0];
  // }
  // onSelectSignature(event: any) {
  //   this.selectsignature = event.target.files[0];
  // }
  // onSelectForm16(event: any) {
  //   this.selectform16 = event.target.files[0];
  // }

  // onSelectitr(event: any) {
  //   this.selectitr = event.target.files[0];
  // }
  // onSelectGuranterPan(event: any) {
  //   this.selectGuranterPan = event.target.files[0];
  // }

  // savecustomer() {

    // Swal.fire({
    //   position: 'top',
    //   icon: 'success',
    //   title: "Saving Process is started !! Wait for Back end Response",
    //   showConfirmButton: false,
    //   timer: 2000

    // })

//     console.log(this.cregister.value);
//     this.cs.customerdetails.custId = this.cregister.get("customerdetails").get("custId").value;
//     this.cs.customerdetails.custFirstName = this.cregister.get("customerdetails").get("custFirstName").value;

//     this.cs.customerdetails.custLastName = this.cregister.get("customerdetails").get("custLastName").value;
//     this.cs.customerdetails.custContactNo = this.cregister.get("customerdetails").get("custContactNo").value;

//     this.cs.customerdetails.custEmailId = this.cregister.get("customerdetails").get("custEmailId").value;
//     this.cs.customerdetails.custGender = this.cregister.get("customerdetails").get("custGender").value;
//     this.cs.customerdetails.custProfession = this.cregister.get("customerdetails").get("custProfession").value;



//     this.cs.customerdetails.addr = this.cregister.get("customerAddress").value;
//     this.cs.customerdetails.addr.adrId = this.cregister.get("customerAddress").get("adrId").value;
//     this.cs.customerdetails.addr.localAddress = "Maharashtra";
//     this.cs.customerdetails.addr.permanentAddress = "Maharashtra";


//     this.cs.customerdetails.bank = this.cregister.get("customerBankDetails").get('bank').value;
//     this.cs.customerdetails.bank.bankDetailId = this.cregister.get("customerBankDetails").get("bankDetailId").value;


//     this.cs.customerdetails.loan.loanId = this.cregister.get("loan").get("customerdetails").get("loanId").value;
//     this.cs.customerdetails.loan.loanAmount = this.cregister.get("loan").get("customerdetails").get("loanAmount").value;
//     this.cs.customerdetails.loan.interestRate = this.cregister.get("loan").get("customerdetails").get("interestRate").value;
//     this.cs.customerdetails.loan.loanTenure = this.cregister.get("loan").get("customerdetails").get("loanTenure").value;
//     this.cs.customerdetails.loan.emi = this.cregister.get("loan").get("customerdetails").get("emi").value;
// console.log(this.cs.customerdetails)

//     let data = new FormData();

//      let allData = JSON.stringify(this.cs.customerdetails);
 
//     data.append("pancard", this.selectpan);
//     data.append("adharCard", this.selectadharcard);
//     data.append("photo", this.selectphoto);
//     data.append("signature", this.selectsignature);
//     data.append("form16", this.selectform16);
//     data.append("itr", this.selectitr);
//     data.append("guarantorPancard", this.selectGuranterPan)
//     data.append("data", allData)

//     console.log(data);
//     this.cs.saveCustomer(data).subscribe();

//   }

saveCustomer:FormGroup;
selectpan:any;
selectadharcard:any;
selectphoto:any;
selectsignature:any;
selectform16:any;
selectitr:any;
  constructor(private cs:CommonService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.saveCustomer=this.fb.group({
      // custId:[],
      custFirstName:[],
      custLastName:[],
      custContactNo:[],
      custEmailId:[],
      custGender:[],
      custProfession:[],
    
      docData:this.fb.group({
        // docId:[],
        pancard:[],
        adharCard:[],
        photo:[],
        signature:[],
        form16:[],
        itr:[]
      }),
      loanDetails:this.fb.group({
        // loanId:[],
        loanStatus:[],
        requiredLoanamount:[]
      }),
      address:this.fb.group({
        // adrId:[],
        localAddress:[],
        permanentAddress:[],
        pincode:[]
      }),
      bankDetails:this.fb.group({
        // bankDetailId:[],
        accountNumber:[],
        bankName:[],
        bankIFSCCode:[],
        accountBalance:[],
        branch:[]

      })
    })
  }

  onSelectPancard(event:any){
this.selectpan=event.target.files[0];
  }
  onSelectAdharcard(event:any){
this.selectadharcard=event.target.files[0];
  }
  onSelectPhoto(event:any){
    this.selectphoto=event.target.files[0];
      }
      onSelectSignature(event:any){
        this.selectsignature=event.target.files[0];
          }
          onSelectForm16(event:any){
            this.selectform16=event.target.files[0];
              }

              onSelectitr(event: any) {
                this.selectitr=event.target.files[0];
                }
             

  Customersave(){
    const json=JSON.stringify(this.saveCustomer.value)
    const data=new FormData;
    data.append("pancard",this.selectpan);
    data.append("adharCard",this.selectadharcard);
    data.append("photo",this.selectphoto);
    data.append("signature",this.selectsignature);
    data.append("form16",this.selectform16);
    data.append("itr",this.selectitr);
    data.append("data",json)
    this.cs.saveCust(data).subscribe()
    alert("Loan Applied Successfully!!!!!")
    this.router.navigateByUrl("/role/RE/cibil")
  }


}
