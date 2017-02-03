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
var hero_1 = require('../service/hero');
var restore_service_1 = require("./restore.service");
var HeroEditorComponent = (function () {
    function HeroEditorComponent(restoreService) {
        this.restoreService = restoreService;
        this.saved = new core_1.EventEmitter();
        this.canceled = new core_1.EventEmitter();
    }
    Object.defineProperty(HeroEditorComponent.prototype, "hero", {
        get: function () {
            return this.restoreService.getItem();
        },
        set: function (hero) {
            this.restoreService.setItem(hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroEditorComponent.prototype.onSave = function () {
        this.saved.next(this.restoreService.getItem());
    };
    HeroEditorComponent.prototype.onCancel = function () {
        this.hero = this.restoreService.restoreItem();
        this.canceled.next(this.hero);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroEditorComponent.prototype, "saved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroEditorComponent.prototype, "canceled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero), 
        __metadata('design:paramtypes', [hero_1.Hero])
    ], HeroEditorComponent.prototype, "hero", null);
    HeroEditorComponent = __decorate([
        core_1.Component({
            selector: 'hero-editor',
            providers: [restore_service_1.RestoreService],
            template: "\n        <div>\n            <div>\n                <span>Name:</span><input [(ngModel)] = \"hero.name\"/>\n                <span><button (click)=\"onSave()\">Save</button></span>\n                <span><button (click)=\"onCancel()\">Cancel</button></span>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [restore_service_1.RestoreService])
    ], HeroEditorComponent);
    return HeroEditorComponent;
}());
exports.HeroEditorComponent = HeroEditorComponent;
//# sourceMappingURL=hero-editor.component.js.map