import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent {

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
}
