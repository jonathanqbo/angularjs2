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
var router_1 = require('@angular/router');
var hero_service_1 = require('../heroes/service/hero.service');
var DashboardComponent2 = (function () {
    function DashboardComponent2(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
    }
    DashboardComponent2.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent2.prototype.edit = function (hero) {
        this.curHero = hero;
        this.isEdit = true;
        console.log(JSON.stringify(this.curHero));
    };
    DashboardComponent2.prototype.onEditSave = function (hero) {
        this.isEdit = false;
        console.log(JSON.stringify(hero));
    };
    DashboardComponent2.prototype.onEditCancel = function () {
        this.isEdit = false;
    };
    DashboardComponent2 = __decorate([
        core_1.Component({
            // NOTE: moduleId is necessary to use templateURL. (for module-relative loading of the templateURL)
            moduleId: module.id,
            selector: 'my-dashboard2',
            templateUrl: 'dashboard2.component.html',
            styleUrls: ['dashboard2.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], DashboardComponent2);
    return DashboardComponent2;
}());
exports.DashboardComponent2 = DashboardComponent2;
//# sourceMappingURL=dashboard2.component.js.map