import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { KeyupDemoComponent } from './demo-keyup.component';
import { HeroFormComponent } from './hero-form.component';
import { DashboardComponent2 } from './dashboard2.component';

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
        }

	];

@NgModule({
  imports: [ 
  	RouterModule.forRoot(routes) 
  ],  
  exports: [ RouterModule]
})

export class AppRoutingModule {}