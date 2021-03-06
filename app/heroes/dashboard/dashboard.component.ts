import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../service/hero';
import { HeroService } from '../service/hero.service';

@Component ({
	// NOTE: moduleId is necessary to use templateURL. (for module-relative loading of the templateURL)
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	
	constructor(
		private heroService : HeroService,
		private router: Router
	) { }
	
	ngOnInit() : void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
	
	gotoDetail(hero: Hero) : void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}