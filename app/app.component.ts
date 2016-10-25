import { Component } from '@angular/core';

// NOTE: need be defined before @Component to make it work
export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
	  		 <h2>{{hero.name}} details</h2>
			 <div><label>id: </label>{{hero.id}}</div>
			 <div>
			 	<label>name: </label>
			 	<input [(ngModel)]="hero.name" placeholder="name">
			 </div>
			`
})

export class AppComponent {
	
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};

	title = 'Tour of Heroes';
	
}
