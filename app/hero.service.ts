import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
		// this is synchronized operation
		// return HEROES;
		
		// Use Promise to make it asynchronized
		return Promise.resolve(HEROES);
	}

}