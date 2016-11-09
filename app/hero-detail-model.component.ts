/**
 * Created by qibo on 11/4/16.
 */

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component ({
    moduleId: module.id,
    selector: 'model-hero-detail',
    templateUrl: 'hero-detail-model.component.html',
    styleUrls: [ 'hero-detail-model.component.css' ]
})

export class HeroDetailModelComponent {
    @Input()
    hero: Hero;

    @Output()
    onSave = new EventEmitter<Hero>();
    @Output()
    onCancel = new EventEmitter();

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    cancel(): void {
        this.onCancel.emit();
    }

    save(): void {
        this.heroService.update(this.hero);
        this.onSave.emit(this.hero);
    }
}