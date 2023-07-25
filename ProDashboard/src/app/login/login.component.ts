import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);

    if(u.username === 'admin' && u.password === 'adm123'){
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for Admin',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('Boss of the Application')
       sessionStorage.setItem('role','ADM');
      this.router.navigateByUrl('role/ADM')
    }
    
   else if (u.username === 'ex@re' && u.password === 'exre') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for RelationshipExe',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('in Relational Officer');
       sessionStorage.setItem('role', 'RE');
      this.router.navigateByUrl("role/RE");
    }
    else if (u.username === 'ex@oe' && u.password === 'exoe') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for OperationalExe',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('in Operational Officer');
       sessionStorage.setItem('role', 'OE');
      this.router.navigateByUrl("role/OE");
    }
    else if (u.username === 'ex@cm' && u.password === 'excm') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for CreditManager',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('in Credit Manager');
       sessionStorage.setItem('role', 'CM');
      this.router.navigateByUrl("role/CM");
    }
    else if (u.username === 'ex@bm' && u.password === 'exbm') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for BankManager',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('in Bank Manager');
       sessionStorage.setItem('role', 'BM');
      this.router.navigateByUrl("role/BM");
    }
    else if (u.username === 'ex@ah' && u.password === 'exah') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Log in Successfull for AccountHead',
        showConfirmButton: false,
        timer: 2000
      })
      console.log('in Account Head');
       sessionStorage.setItem('role', 'AH');
      this.router.navigateByUrl("role/AH");
    }

    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login Unsuccessfull! Please Register',
      })

    }
    
  }
  signup(u) {
    console.log("signup");
  }
}
