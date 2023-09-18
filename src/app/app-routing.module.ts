import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { SoupsComponent } from './components/soups/soups.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { ItemsDBComponent } from './components/items-db/items-db.component';
// import { AuthguardService } from './services/authguard.service';


const routes: Routes = [
	
	{path:"main", component: MainComponent, children: [
		{path:"home", component: HomeComponent},
		{path:"drinks", component: DrinksComponent},
		{path:"sandwiches", component: SandwichesComponent},
		{path:"soups", component: SoupsComponent},
		{path:"bakery", component: BakeryComponent}
	]},
	{path:"admin", component: AdminLoginComponent},
	{path:"menu_items", component: ItemsDBComponent},
	{path:"register", component: AdminRegisterComponent},
	{path: "", component: MainComponent},
	{path:"**", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

