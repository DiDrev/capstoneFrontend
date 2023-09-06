import { Component } from '@angular/core';
import { ImenuItem } from 'src/app/interfaces/imenu-item';
import { GetMenuItemsService } from 'src/app/services/get-menu-items.service';

@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.css']
})

export class SoupsComponent {
	items!: ImenuItem[];

	constructor(private itemsService: GetMenuItemsService){

		itemsService.getMenuItems().subscribe({
			next:(results)=>{
				this.items = results;
			}
		})
	}
}
