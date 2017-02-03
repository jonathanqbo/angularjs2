/**
 * Created by qibo on 11/10/16.
 */

import { Component } from '@angular/core'

import { EditItem } from './edititem';
import { Hero } from '../service/hero';
import {HeroService} from "../service/hero.service";

@Component({
    selector: 'heroes-list',
    template: `
        <style>
            hero-card {
                float: left;
                margin: 5px 5px 5px 5px;
                height: 30px;
            }
            
        </style>
        <div>
            <div *ngFor="let editItem of heroes">
                <div *ngIf="editItem.editing" class="row">
                    <hero-card [hero]="editItem.item"></hero-card>
                    <button (click)="editItem.editing=true">Edit</button>
                </div>
                <div *ngIf="!editItem.editing">
                    <hero-editor [hero]="editItem.item" (saved)="onSaved(editItem, $event)" (canceled)="onCanceled(editItem)"></hero-editor>
                </div>
            </div>
        </div>
    `
})

export class HeroesListComponent {
    heroes: Array<EditItem<Hero>> = [];

    constructor(heroService: HeroService) {
        heroService.getHeroes().then(heroes => heroes.forEach(hero => {console.log('###' + JSON.stringify(hero));this.heroes.push(new EditItem(hero))}));
    }

    onSaved(editItem: EditItem<Hero>, hero: Hero) {
        editItem.item = hero;
        editItem.editing = false;
    }

    onCanceled(editItem: EditItem<Hero>) {
        editItem.editing = false;
    }
}