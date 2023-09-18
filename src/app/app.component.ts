import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DiDRestaurant';
  logo: string = "../assets/logo.jpg";
  instagramLogo: string = '../assets/instagramLogo.png';
  facebookLogo: string = '../assets/facebookLogo.png';
  twitterLogo: string = '../assets/twitterLogo.png';

  ngOnInit() {
		const menuToggle = document.getElementById('menu-toggle');
		const menu = document.getElementById('menu');

		if(menuToggle && menu){
		menuToggle.addEventListener('click', () => {
		    menu.classList.toggle('active');
		});
	 }
	}
 }