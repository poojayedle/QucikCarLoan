import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-get-cibil',
  templateUrl: './get-cibil.component.html',
  styleUrls: ['./get-cibil.component.css']
})
export class GetCibilComponent {


  allEnquiry:any;
  constructor(private cs:CommonService,private router:Router){}

  ngOnInit(): void {
    this.cs.getAllEnqury().subscribe(
      (e:any)=>{
        this.allEnquiry=e;
      }
    )
  }
navigateTo(){
  this.router.navigateByUrl("/role/RE/applyLoan")
}
  sendEmail(e:any){
    
    this.router.navigateByUrl("/sendMail/"+JSON.stringify(e))
  }

  sendRejectEmail(e:any){
    this.router.navigateByUrl("/sendMail/"+JSON.stringify(e))

  }

  applyLoan(loan:any){
    this.router.navigateByUrl("/loan/"+JSON.stringify(loan))
  }


  deleteById(custId:any){

    this.cs.deleteById(custId).subscribe()
    window.location.reload()
  }
}
