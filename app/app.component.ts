import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
	  		 <h2>My Heroes</h2>
	  		 <ul class="heroes">
	  		 	<li *ngFor = "let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
	  		 		<span class="badge">{{hero.id}}</span> {{hero.name}}
	  		 	</li>
	  		 </ul>
	  		 <my-hero-detail [hero]=selectedHero></my-hero-detail>
			`,
	providers: [ HeroService ]
})

export class AppComponent implements OnInit {
	
	heroes: Hero[];

	title = 'Tour of Heroes';
	
	selectedHero: Hero;
	
	constructor ( private heroService: HeroService ) {}
	
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
	
}
