import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iadmin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root',
})
export class GetAdminsService {
constructor(private httpsClient: HttpClient) {}

	registerAdmin(formData: any) {
		return this.httpsClient.post<Iadmin>('http://localhost:3000/register',formData);
	}
	
	loginAdmin(formData:any){
		return this.httpsClient.post<Iadmin>('http://localhost:3000/login', formData);
	}

	getAdminData(){
		let data = localStorage.getItem('currentUser');
		return data ? JSON.parse(data) : null;
	}

	isAuthenticated(){
		return (this.getAdminData() !== null) ? true : false;
	 }
}


// getAdmins() {
// 	return this.httpsClient.get<Iadmin[]>('http://localhost:3000/admins');
//  }
//  getAdmin(admin_email: string) {
// 	return this.httpsClient.get<Iadmin>(
// 	  `http://localhost:3000/admins/${admin_email}`
// 	);
//  }