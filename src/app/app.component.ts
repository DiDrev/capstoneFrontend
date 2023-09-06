import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiDRestaurant';
  logo: string = "../assets/logo.jpg";
  banner: string = '../assets/banner.jpg';
  instagramLogo: string = '../assets/instagramLogo.png';
  facebookLogo: string = '../assets/facebookLogo.png';
  twitterLogo: string = '../assets/twitterLogo.png'
}
