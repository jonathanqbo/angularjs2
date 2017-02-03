/**
 * Created by qibo on 11/10/16.
 */

import { Component, Input } from '@angular/core';

import { Hero } from "../service/hero";

@Component({
    selector: 'hero-card',
    template: `
            <div>
                <span>Name:</span>
                <span>{{hero.name}}</span>
            </div>
    `
})

export class HeroCardComponent {
    @Input()
    hero: Hero;
}