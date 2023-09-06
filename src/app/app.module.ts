import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { SoupsComponent } from './components/soups/soups.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    SandwichesComponent,
    SoupsComponent,
    BakeryComponent,
    NavbarComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
