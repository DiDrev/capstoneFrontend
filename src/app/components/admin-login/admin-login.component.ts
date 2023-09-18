import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAdminsService } from 'src/app/services/get-admins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
	loginForm: FormGroup;
	
	constructor(private formBuilder: FormBuilder, private adminService: GetAdminsService, private router: Router){
		this.loginForm = formBuilder.group({
			email: ['',[Validators.required, Validators.email]],
			password: ['',[Validators.required]]
		});
	}

	login(){
		if(this.loginForm.valid){
			let formData = this.loginForm.value;

			this.adminService.loginAdmin(formData).subscribe({
				next: (result) => {
					localStorage.setItem("currentUser", JSON.stringify(result));
					alert('You are logged in!!!');
					this.router.navigate(['menu_items']);
				}, error: (err) => {
					alert(err.error);
					console.log(err)
				}
			})
		}
	}	
}







// admins!: Iadmin[];
		// adminService.getAdmins().subscribe({
		// 	next:(results)=>{
		// 		this.admins=results;
		// 	}
		// })