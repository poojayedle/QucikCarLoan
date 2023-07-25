import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled=new EventEmitter<boolean>();
 menuStatus:boolean=false;

  constructor(private route:Router) { }
  userRole:any;
  role:any;
  menus:any[];
  header:any;
  email:any;
  ngOnInit(): void {


    this.role=sessionStorage.getItem("role");
  }
  SideNavToggled(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  logout(){
    this.route.navigate(['log']);
  }
  emi(){
    this.route.navigate(['emi']);
  }
  
}
