/**
 * Created by qibo on 11/4/16.
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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_1 = require('../heroes/service/hero');
var hero_service_1 = require('../heroes/service/hero.service');
var HeroDetailModelComponent = (function () {
    function HeroDetailModelComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.onSave = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    HeroDetailModelComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    HeroDetailModelComponent.prototype.save = function () {
        this.heroService.update(this.hero);
        this.onSave.emit(this.hero);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailModelComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailModelComponent.prototype, "onSave", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailModelComponent.prototype, "onCancel", void 0);
    HeroDetailModelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'model-hero-detail',
            templateUrl: 'hero-detail-model.component.html',
            styleUrls: ['hero-detail-model.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetailModelComponent);
    return HeroDetailModelComponent;
}());
exports.HeroDetailModelComponent = HeroDetailModelComponent;
//# sourceMappingURL=hero-detail-model.component.js.map