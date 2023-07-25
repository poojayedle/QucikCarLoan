import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-get-sanction-details',
  templateUrl: './get-sanction-details.component.html',
  styleUrls: ['./get-sanction-details.component.css']
})
export class GetSanctionDetailsComponent implements OnInit {
GetAllData:Array<any>;

constructor(private cs:CommonService){}

  ngOnInit(): void {
    this.cs.getAllCust().subscribe(
      (c:any)=>{
        
        this.GetAllData=c;
      }
    )
    // this.GetAllData.filter(c=>c.sactiondetails!=null);
      
  }


  GenerateSanctionLetterAndSendMail(custId:any){

    this.cs.GenerateSanctionLetterAndSendMail(custId).subscribe();
    window.location.reload()
  }
}
