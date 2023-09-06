import { Component } from '@angular/core';
import { ImenuItem } from 'src/app/interfaces/imenu-item';
import { GetMenuItemsService } from 'src/app/services/get-menu-items.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent {
	items!: ImenuItem[];

	constructor(private itemService: GetMenuItemsService){

		itemService.getMenuItems().subscribe({
			next:(results)=>{
				this.items = results;
			}
		})
	}
}
