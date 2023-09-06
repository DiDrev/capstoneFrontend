import { Component } from '@angular/core';
import { ImenuItem } from 'src/app/interfaces/imenu-item';
import { GetMenuItemsService } from 'src/app/services/get-menu-items.service';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent {
	items!: ImenuItem[];

	constructor(private itemService: GetMenuItemsService){

		itemService.getMenuItems().subscribe({
			next:(results)=>{
				this.items = results;
			}
		})
	}
}
