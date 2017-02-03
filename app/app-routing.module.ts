import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './heroes/list/hero-detail.component';
import { HeroesComponent } from './heroes/list/heroes.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { KeyupDemoComponent } from './input/demo-keyup.component';
import { HeroFormComponent } from './form/hero-form.component';
import { DashboardComponent2 } from './modal-dashboard/dashboard2.component';
import {HeroesListComponent} from "./heroes/listedit/heroes-list.component";

const routes: Routes = [
  		{
  			path: '',
  			// by default, show dashboard
  			redirectTo: '/dashboard',
  			pathMatch: 'full'
  		}, 
		{
			path: 'heroes',
			component: HeroesComponent
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
        {
            path: 'editheroes',
            component: HeroesListComponent
        },
		{
			path: 'detail/:id',
			component: HeroDetailComponent
		},
		{
			path: 'demo-input',
			component: KeyupDemoComponent
		},
        {
            path: 'demo-form',
            component: HeroFormComponent
        },
        {
            path: 'model-form',
            component: DashboardComponent2
        },
        {
            path: 'feature',
            loadChildren: 'app/feature1/contact.module#ContactModule'
        }

	];

@NgModule({
  imports: [ 
  	RouterModule.forRoot(routes) 
  ],  
  exports: [ RouterModule]
})

export class AppRoutingModule {}