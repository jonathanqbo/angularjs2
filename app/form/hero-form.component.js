/**
 * Created by qibo on 11/3/16.
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
var hero_1 = require('../heroes/service/hero');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Power1', 'Power2', 'Power3', 'Power4'];
        this.model = new hero_1.Hero(1, 'Jonathan', 'Power2', 'Be Lucky');
        this.submitted = false;
        this.active = true;
    }
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    HeroFormComponent.prototype.onReset = function () {
        var _this = this;
        this.model = new hero_1.Hero(0, '', '');
        // use 'active' flag to work around the 'required' error message which caused by reset
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: 'hero-form.component.html',
            styleUrls: ['hero-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map