import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAdminsService } from 'src/app/services/get-admins.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css'],
})
export class AdminRegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private adminService: GetAdminsService, private router: Router){
    this.registerForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
		
    });
  }

  register() {
	const referenceCodeInput = document.getElementById('referenceCode') as HTMLInputElement;

   if (this.registerForm.valid && referenceCodeInput.value == '11111') {
     let formData = this.registerForm.value;
     this.adminService.registerAdmin(formData).subscribe({
      next: (result) => {
         console.log(result);
         alert('Admin was created successfully');
		 this.router.navigate(['menu_items']);
       },
	  	error: (error) => {
		console.log(error);
		alert(error);
	  }
	});
	} else {
		alert('Invalid reference code. Please insert the code to proceed.')
	}
}

}
