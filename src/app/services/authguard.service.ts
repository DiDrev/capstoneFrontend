import { Injectable } from '@angular/core';
import { GetAdminsService } from './get-admins.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private adminService: GetAdminsService, private router: Router) { }

  canActivate(): boolean{
	if(!this.adminService.isAuthenticated()){
		this.router.navigate(['menu_items']);
		return false;
	} else {
		return true;
	}
  }
}
