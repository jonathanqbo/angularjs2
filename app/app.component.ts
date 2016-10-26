import { Component } from '@angular/core';

// NOTE: need be defined before @Component to make it work
export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = [
	{id: 11, name: 'Mr. Nice'},
	{id: 12, name: 'Narco'},
	{id: 13, name: 'Bombasto'},
	{id: 14, name: 'Celerita'},
	{id: 15, name: 'Mageta'},
	{id: 16, name: 'RubberMan'},
	{id: 17, name: 'Dynama'},
	{id: 18, name: 'Dr QI'},
	{id: 19, name: 'Magma'},
	{id: 20, name: 'Tornado'}
]

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
	  		 <h2>My Heroes</h2>
	  		 <ul class="heroes">
	  		 	<li *ngFor = "let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
	  		 		<span class="badge">{{hero.id}}</span> {{hero.name}}
	  		 	</li>
	  		 </ul>
	  		 <div *ngIf="selectedHero">
		  		 <h2>{{selectedHero.name}} details!</h2>
		  		 <div><label>id: </label>{{selectedHero.id}}</div>
		  		 <div>
		  		 	<label>name: </label>
		  		 	<input [(ngModel)]="selectedHero.name" placeholder="Hero Name"/>
		  		 </div>
		  	</div>
			`
})

export class AppComponent {
	
	heroes = HEROES;

	title = 'Tour of Heroes';
	
	selectedHero: Hero;
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	
}
