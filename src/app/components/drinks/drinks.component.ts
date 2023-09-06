import { Component } from '@angular/core';
import { ImenuItem } from 'src/app/interfaces/imenu-item';
import { GetMenuItemsService } from 'src/app/services/get-menu-items.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})

export class DrinksComponent {
	items!: ImenuItem[];

	constructor(private itemService: GetMenuItemsService){

		itemService.getMenuItems().subscribe({
			next:(results)=>{
				this.items = results;
			}
		})
	}


}