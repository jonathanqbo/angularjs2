/**
 * Created by qibo on 11/3/16.
 */

import { Component } from '@angular/core';

import { Hero } from './hero';

@Component ({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html',
    styleUrls: ['hero-form.component.css']
})

export class HeroFormComponent {

    powers = ['Power1', 'Power2', 'Power3', 'Power4'];

    model = new Hero(1, 'Jonathan', 'Power2', 'Be Lucky');

    submitted = false;

    active = true;

    onSubmit() {
        this.submitted = true;
    }

    onReset() {
        this.model = new Hero(0,'','');

        // use 'active' flag to work around the 'required' error message which caused by reset
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

}