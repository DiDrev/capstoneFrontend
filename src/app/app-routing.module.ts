import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { SoupsComponent } from './components/soups/soups.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
	{path:"drinks", component: DrinksComponent},
	{path:"sandwiches", component: SandwichesComponent},
	{path:"soups", component: SoupsComponent},
	{path:"bakery", component: BakeryComponent},
	{path:"admin", component: AdminLoginComponent},
	{path:"*", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
