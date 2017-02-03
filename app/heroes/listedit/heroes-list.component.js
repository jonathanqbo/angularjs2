/**
 * Created by qibo on 11/10/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var edititem_1 = require('./edititem');
var hero_service_1 = require("../service/hero.service");
var HeroesListComponent = (function () {
    function HeroesListComponent(heroService) {
        var _this = this;
        this.heroes = [];
        heroService.getHeroes().then(function (heroes) { return heroes.forEach(function (hero) { console.log('###' + JSON.stringify(hero)); _this.heroes.push(new edititem_1.EditItem(hero)); }); });
    }
    HeroesListComponent.prototype.onSaved = function (editItem, hero) {
        editItem.item = hero;
        editItem.editing = false;
    };
    HeroesListComponent.prototype.onCanceled = function (editItem) {
        editItem.editing = false;
    };
    HeroesListComponent = __decorate([
        core_1.Component({
            selector: 'heroes-list',
            template: "\n        <style>\n            hero-card {\n                float: left;\n                margin: 5px 5px 5px 5px;\n                height: 30px;\n            }\n            \n        </style>\n        <div>\n            <div *ngFor=\"let editItem of heroes\">\n                <div *ngIf=\"editItem.editing\" class=\"row\">\n                    <hero-card [hero]=\"editItem.item\"></hero-card>\n                    <button (click)=\"editItem.editing=true\">Edit</button>\n                </div>\n                <div *ngIf=\"!editItem.editing\">\n                    <hero-editor [hero]=\"editItem.item\" (saved)=\"onSaved(editItem, $event)\" (canceled)=\"onCanceled(editItem)\"></hero-editor>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesListComponent);
    return HeroesListComponent;
}());
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heroes-list.component.js.map