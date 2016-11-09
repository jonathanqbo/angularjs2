import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component ({
	// NOTE: moduleId is necessary to use templateURL. (for module-relative loading of the templateURL)
	moduleId: module.id,
	selector: 'my-dashboard2',
	templateUrl: 'dashboard2.component.html',
	styleUrls: [ 'dashboard2.component.css' ]
})

export class DashboardComponent2 implements OnInit {
	heroes: Hero[] = [];

	curHero: Hero;
	isEdit: boolean;

	
	constructor(
		private heroService : HeroService,
		private router: Router
	) { }
	
	ngOnInit() : void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
	
	edit(hero: Hero) : void {
		this.curHero = hero;
		this.isEdit = true;
		console.log(JSON.stringify(this.curHero));
	}

	onEditSave(hero: Hero): void {
		this.isEdit = false;
		console.log(JSON.stringify(hero));
	}
	onEditCancel(): void {
		this.isEdit = false;
	}
}