import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus:boolean=false;
  
  list=[
   {
    ADM:[
      
     // {path:"saveUser",title:"SaveUser",icon:"fa fa-list"},
      {path:"all",title:"AllEnquiries",icon:"fa fa-list"},
      {path:"apprvdform",title:"ApprovedForms",icon:"fa fa-list"},
      {path:"sanctDetails",title:"GetSanctionDetails",icon:"fa fa-list"},
      {path:"loanDisbus",title:"LoanDisbursement",icon:"fa fa-list"},
      
    ],
    RE:[
     
      {path:"all", title:"AllEnquiries", icon:"fa fa-list"},
      {path:'cibil',title:"GetCibilScore",icon:"fa fa-list"},
      
     
      {
        path:"applyLoan",title:"ApplyLoan",icon:"fa fa-list"
      }
     
      ],
      OE:[
        {path:"cibilScore",title:"CheckCibil",icon:"fa fa-list"},
        {path:"docverification", title:"DocumentVerify", icon:"fa fa-list"}
        
      ],
      CM:[
        
        {
          path:"custVerify",title:"CustomerVerification",icon:"fa fa-list"
        },
        {
          path:"genSanction",title:"GetSanctionDetails",icon:"fa fa-list"
        },
        {
          path:"sanctDetails",title:"SanctionDetails",icon:"fa fa-list"
        }
      ],
      AH:[
        {path:"loandisbus",title:"LoanDisbursement",icon:"fa fa-list"}
      ],
      BM:[
        {
          path:"applicantlist", title:"ApplicantList", icon:"fa fa-list"
        },
        {
          path:"ledger", title:"Ledger", icon:"fa fa-money"
        }
      ]
   }
  ];

  role:string;

  constructor() { }

  ngOnInit(): void {

    console.log(this.list);
    this.role=sessionStorage.getItem("role");

  }

}
