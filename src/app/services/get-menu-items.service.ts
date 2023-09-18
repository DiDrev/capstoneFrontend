import { Injectable } from '@angular/core';
import { ImenuItem } from '../interfaces/imenu-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetMenuItemsService {

  constructor(private http: HttpClient) { }
  
  getMenuItems(){
	return this.http.get<ImenuItem[]>('http://localhost:3000/menuitems');
  }

  getMenuItem(menuItem_name: string){
	return this.http.get<ImenuItem>(`http://localhost:3000/menuitems/${menuItem_name}`);
  }

  updateMenuItem(menuItem_name: string, formData:any){
	return this.http.put<ImenuItem>(`http://localhost:3000/menuitems/${menuItem_name}`, FormData);
  }

  deleteMenuItem(menuItem_name: string){
	return this.http.delete<ImenuItem>(`http://localhost:3000/menuitems/${menuItem_name}`);
  }

  createMenuItem(FormData:any){
	return this.http.post<ImenuItem>(`http://localhost:3000/menuitems`, FormData);
  }

}
