import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-customer-verification',
  templateUrl: './customer-verification.component.html',
  styleUrls: ['./customer-verification.component.css']
})
export class CustomerVerificationComponent {

  getAllVerifiedData:any;

  constructor(private cs:CommonService,private router:Router){

  }
  ngOnInit(): void {
this.cs.getVerifiedCustomers().subscribe(
  (c:any)=>{
    this.getAllVerifiedData=c
  }
)
    
  }
  generateSanctionLetter(c:any){
    this.router.navigateByUrl("/role/CM/sanctDetails/"+JSON.stringify(c.custId))
  }
  setCustData(){
    this.cs.saveCustDoc().subscribe();
  }
}
