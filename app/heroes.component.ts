import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  // while using Router, don't need this selector actually.
  selector: 'my-heroes',
  template: `<h1>{{title}}</h1>
	  		 <h2>My Heroes</h2>
	  		 <ul class="heroes">
	  		 	<li *ngFor = "let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
	  		 		<span class="badge">{{hero.id}}</span> {{hero.name}}
	  		 	</li>
	  		 </ul>
	  		 <div *ngIf="selectedHero">
	  		 	<h2>{{selectedHero.name | uppercase}} is my hero</h2>
	  		 	<button (click)="gotoDetail()">View Detail</button>
	  		 </div>
			`
})

export class HeroesComponent implements OnInit {
	
	heroes: Hero[];

	title = 'Tour of Heroes';
	
	selectedHero: Hero;
	
	constructor ( 
		private heroService: HeroService,
		private router: Router 
	) {}
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	getHeroes(): void {
		// the heroService return Promise which is asynchronized, 
		// so need use then() to handle correct response
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	gotoDetail() : void {
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate(link);
	}
	
}
