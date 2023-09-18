import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/interfaces/admin';
import { ImenuItem } from 'src/app/interfaces/imenu-item';
import { GetAdminsService } from 'src/app/services/get-admins.service';
import { GetMenuItemsService } from 'src/app/services/get-menu-items.service';

@Component({
  selector: 'app-items-db',
  templateUrl: './items-db.component.html',
  styleUrls: ['./items-db.component.css']
})
export class ItemsDBComponent implements OnInit{
	addItemForm: FormGroup;
	item: ImenuItem[]=[];
	admin!:Iadmin;
		
	constructor(private formBuilder: FormBuilder, private adminService: GetAdminsService, private itemService: GetMenuItemsService, private router: Router){	

	

	this.addItemForm = formBuilder.group({
		name:['',[Validators.required]],
		price:[''],
		description:[''],
		type:[''],
		category:[''],
		calories:[''],
		allergens:['']
	});

	this.admin = this.adminService.getAdminData();
}

	ngOnInit(){
		 this.loadMenuItems();
	}

		loadMenuItems(){
			this.itemService.getMenuItems().subscribe({
				next: (results: ImenuItem[]) => {
				  this.item = results;
				},
				error: (error: any) => {
				  console.error('Error fetching menu items', error);
				}
			 });
		 }

		deleteItem(menuItemName: string){
			if(!menuItemName){
				console.error('Menu item name is empty');
				return;
			}
			this.itemService.deleteMenuItem(menuItemName).subscribe({
				next: (result: ImenuItem)=> {
					console.log('Item deleted successfully', result);
					alert('Item deleted successfully');

					this.loadMenuItems();
				},
				error: (err)=>{
					console.log('Error deleting item', err)
					}
			})
		}

		createMenuItem(){
			if(this.addItemForm.valid){
				const formData = this.addItemForm.value;
				this.itemService.createMenuItem(formData).subscribe({
					next: (result) => {
						console.log(result);
						alert('Item was added successfully');
					}, error: (error) =>{
						console.log(error);
						alert('Error adding an item: '+ error);
					}
				})
			}
		}

		logout(){
			localStorage.removeItem("currentUser");
    		alert('Logout was successful');
			this.router.navigate(['main']);
		}
}





// itemService.getMenuItems().subscribe({
// 	next:(results)=>{
// 		this.items = results;
// 	}
// })

// itemService.deleteMenuItem(this.menuItem_name).subscribe({
// next:(result: ImenuItem)=>{
// 	this.item = result;
// console.log('Item deleted successfully', result);
// alert('Item deleted successfully');
// },
// error: (err)=>{
// console.log('Error deleting item', err)
// }
// });



