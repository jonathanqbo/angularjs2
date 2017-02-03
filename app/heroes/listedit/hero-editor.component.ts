/**
 * Created by qibo on 11/10/16.
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Hero } from '../service/hero';
import {RestoreService} from "./restore.service";

@Component({
    selector: 'hero-editor',
    providers: [RestoreService],
    template: `
        <div>
            <div>
                <span>Name:</span><input [(ngModel)] = "hero.name"/>
                <span><button (click)="onSave()">Save</button></span>
                <span><button (click)="onCancel()">Cancel</button></span>
            </div>
        </div>
    `
})

export class HeroEditorComponent{

    constructor(private restoreService: RestoreService<Hero>) {}

    @Output()
    saved = new EventEmitter();
    @Output()
    canceled = new EventEmitter();

    @Input()
    set hero(hero: Hero) {
        this.restoreService.setItem(hero);
    }

    get hero() {
        return this.restoreService.getItem();
    }

    onSave() {
        this.saved.next(this.restoreService.getItem());
    }

    onCancel() {
        this.hero = this.restoreService.restoreItem();
        this.canceled.next(this.hero);
    }
}