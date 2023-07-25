import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactus()
  {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Send Successfully',
      showConfirmButton: true,
      timer: 2000
    })
  }
}
