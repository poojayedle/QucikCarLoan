import { Address } from "../address/address"
import { BankDetails } from "../bankdetails/bank-details"
import { Document } from "../Document/document";
import { LoanDetails } from "../LoanDetails/loan-details"


export class Customer {

    custId:number;
	 custFirstName:string;
     custLastName:string;
     custGender:string;
     custContactNo:number;
     custEmailId:string;
    custProfession:string;
    
    doc:Document;   
    addr:Address;
    loan:LoanDetails;
    bank:BankDetails
    


    }
