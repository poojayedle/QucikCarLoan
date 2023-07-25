import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Customer } from '../model/customer/customer';
import { Ledger } from '../model/Ledger/ledger';




@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //       bankName:'',
  //       bankIFSCCode:'' ,     
  //       accountBalance:0,
  //       branch:''
  //     }
  //   }
  //   emiId: [];
  //   principal: [];
  //   annualInterestRate: [];
  //   tenureInMonths: []
  //   emistatus: Ledger = {
  //     emiId: 0,
  //     loanId: 0,
  //     installmentNo: 0,
  //     installmentAmount: 0.0,
  //     installmentDate: null,
  //     installmentStatus: 0
  //   }
  //   createEnquiry(enqur: any) {
  //     return this.http.post("http://localhost:1234/saveEnquiry", enqur)
  //   }
  //   loginCheck(username: string, password: string) {
  //     return this.http.get("http://localhost:1234/logincheck/" + username + "/" + password);
  //   }
  // getjustCreatedEnquiry(){
  //   return this.http.get("http://localhost:1234/getAllJustCreatedEnquiry")
  // }
  //   getAllEnqury() {
  //     return this.http.get("http://localhost:1234/getAllEnquiry");
  //   }
  //   checkCibil(e: any) {
  //     return this.http.post("http://localhost:1234/checkCibil", e);
  //   }
  //   sendsuccessMail(e: any) {
  //     return this.http.post("http://localhost:1234/sendSuccessMail", e);
  //   }
  //   sendRejectMail(e: any) {
  //     return this.http.post("http://localhost:1234/sendRejectMail", e)
  //   }
  //   getAllCust() {
  //     return this.http.get("http://localhost:1234/getAllCustomer")
  //   }
  //   setStatusVerified(custId: any) {
  //     return this.http.get("http://localhost:1234/getCustById/" + custId)
  //   }
  //   getVerifiedCustomers() {
  //     return this.http.get("http://localhost:1234/getAllVerifiedCustomer")
  //   }
  //   saveCustDoc() {
  //     return this.http.get("http://localhost:1234/saveCust")
  //   }
  //   getByCustId(custId: any) {
  //     return this.http.get("http://localhost:1234/getById/" + custId)
  //   }
  //   saveCust(c: any) {
  //     return this.http.post("http://localhost:1234/saveCust", c)
  //   }
  //   LoanDisburse(custId: any) {
  //     return this.http.get("http://localhost:1234/saveTransaction/"+custId);
  //   }
  //   GenerateSanctionLetterAndSendMail(custId: any) {
  //     return this.http.get("http://localhost:1234/getSanctionLetter/"+custId);
  //   }
 
  // updatenquiry(enquiryId: any) {
  //   throw new Error('Method not implemented.');
  // }


//   constructor(private http: HttpClient) { }

//   customerdetails:Customer={
//     custId: 0,
//     custFirstName: '',
//     custLastName: '',
//     custContactNo: 0,
//     custEmailId: '',
//     custGender: '',
//     custProfession: '',
//     doc:null,
//     addr:{
//       adrId:0,
//       localAddress:'',
//       permanentAddress:'',
//        pincode:0
//     },
//     loan:{
//       loanId:0,
//       loanAmount:0,
//       interestRate:0,
//       loanTenure:'',
//       emi:0,
//     },
//     bank:{
//       bankDetailId:0,
//       accountNumber:0,     
//       bankName:'',
      
//       bankIFSCCode:'' ,     
//       accountBalance:0,
//       branch:''
//     }
//   }

//   emiId: [];
//   principal: [];
//   annualInterestRate: [];
//   tenureInMonths: []

//   emistatus: Ledger = {
//     emiId: 0,
//     loanId: 0,
//     installmentNo: 0,
//     installmentAmount: 0.0,
//     installmentDate: null,
//     installmentStatus: 0
//   }

//   createEnquiry(enqur: any) {
//     return this.http.post("http://localhost:1234/saveEnquiry", enqur)
//   }

//   loginCheck(username: string, password: string) {
//     return this.http.get("http://localhost:1234/logincheck/" + username + "/" + password);
//   }
// getjustCreatedEnquiry(){
//   return this.http.get("http://localhost:1234/getAllJustCreatedEnquiry")
// }

//   getAllEnqury() {
//     return this.http.get("http://localhost:1234/getAllEnquiry");
//   }

//   checkCibil(e: any) {
//     return this.http.post("http://localhost:1234/checkCibil", e);
//   }

//   sendsuccessMail(e: any) {
//     return this.http.post("http://localhost:1234/sendSuccessMail", e);
//   }

//   sendRejectMail(e: any) {
//     return this.http.post("http://localhost:1234/sendRejectMail", e)
//   }

//   getAllCust() {
//     return this.http.get("http://localhost:1234/getAllCustomer")
//   }


//   setStatusVerified(custId: any) {
//     return this.http.get("http://localhost:1234/getCustById/" + custId)
//   }

//   getVerifiedCustomers() {

//     return this.http.get("http://localhost:1234/getAllVerifiedCustomer")
//   }
//   saveCustDoc() {
//     return this.http.get("http://localhost:1234/saveCust")
//   }

//   getByCustId(custId: any) {

//     return this.http.get("http://localhost:1234/getById/" + custId)
//   }



//   saveCust(c: any) {
//     return this.http.post("http://localhost:1234/saveCust", c)
//   }
 

//   LoanDisburse(custId: any) {
//     return this.http.get("http://localhost:1234/saveTransaction/"+custId);
//   }
//   GenerateSanctionLetterAndSendMail(custId: any) {
//     return this.http.get("http://localhost:1234/getSanctionLetter/"+custId);
//   }


custId:[];
  custFirstName:[];
  custLastName:[];
  custContactNo:[];
  custEmailId:[];
  custPANno:[];
  custLoanType:[];
  custLoanAmmount:[];
  custTennureYear:[];
  constructor(private http:HttpClient) { }

  createEnquiry(enqur:any){
    return this.http.post("http://localhost:1234/saveEnquiry",enqur)
  }

  emiId:[];
  principal:[];
  annualInterestRate:[];
  tenureInMonths:[]

  createEmi(e:any){
    return this.http.post("http://localhost:1234/CalculateEmi",e);
  }


  loginCheck(username:string,password:string){
return this.http.get("http://localhost:1234/logincheck/"+username+"/"+password);
  }

  getAllJustCreatedEnqury() {
    return this.http.get("http://localhost:1234/getAllJustCreatedEnquiry")
  }

  getAllEnqury(){
    return this.http.get("http://localhost:1234/getAllEnquiry");
  }

  checkCibil(e: any) {
    return this.http.post("http://localhost:1234/checkCibil",e);
  }

  sendsuccessMail(e:any) {
    return this.http.post("http://localhost:1234/sendSuccessMail",e);
  }

  sendRejectMail(e:any) {
    return this.http.post("http://localhost:1234/sendRejectMail",e)
  }

  getAllCust(){
    return this.http.get("http://localhost:1234/getAllCustomer")
  }


  setStatusVerified(custId:any){
    return this.http.get("http://localhost:1234/getCustById/"+custId)
  }

  getVerifiedCustomers() {
  
    return this.http.get("http://localhost:1234/getAllVerifiedCustomer")
  }
  saveCustDoc() {
    return this.http.get("http://localhost:1234/saveCust")
  }

  getByCustId(custId: any) {

    return this.http.get("http://localhost:1234/getById/"+custId)
  }

  // saveCustomer(cust:any){
  //   return this.http.post("http://localhost:1234/saveSCust",cust)
  // }
 
  saveCust(data: any) {
    return this.http.post("http://localhost:1234/saveCust",data)
  }

  GenerateSanctionLetterAndSendMail(custId: any) {
    return this.http.get("http://localhost:1234/getSanctionLetter/"+custId);
  }
  
  saveSCustomer(cust: any) {
    return this.http.post("http://localhost:1234/saveSCust", cust)
  }
  LoanDisburse(custId: any) {
    return this.http.get("http://localhost:1234/saveTransaction/"+custId);
  }

  deleteById(custId: any) {
    return this.http.delete("http://localhost:1234/deleteById/"+custId)
  }

  
}
