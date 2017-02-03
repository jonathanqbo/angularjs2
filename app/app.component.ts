import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  			 <nav>
  			 	<a routerLink="/heroes">Heroes</a>
  			 	<a routerLink="/dashboard">Dashboard</a>
  			 	<a routerLink="/editheroes">EditableHeroes</a>
  			 	<a routerLink="/demo-input">Input Demo</a>
  			 	<a routerLink="/demo-form">Form Demo</a>
  			 	<a routerLink="/model-form">Model Window Demo</a>
  			 	<a routerLink="/feature">Contact</a>
  			 </nav>
  			 <router-outlet></router-outlet>
			`,
	styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
	title = 'Tour of Heroes';
}