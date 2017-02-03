/**
 * Created by qibo on 11/9/16.
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
var shared_module_1 = require('../shared/shared.module');
var hero_detail_component_1 = require('./list/hero-detail.component');
var heroes_component_1 = require('./list/heroes.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_service_1 = require('./service/hero.service');
var hero_search_component_1 = require('./list/hero-search.component');
var heroes_list_component_1 = require('./listedit/heroes-list.component');
var hero_card_component_1 = require("./listedit/hero-card.component");
var hero_editor_component_1 = require("./listedit/hero-editor.component");
var HerosModule = (function () {
    function HerosModule() {
    }
    HerosModule = __decorate([
        core_1.NgModule({
            // Here import SharedModule, so common pipe/directive/modules(CommonModule/FormsModule) can be used without import here
            imports: [shared_module_1.SharedModule],
            declarations: [
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_search_component_1.HeroSearchComponent,
                heroes_list_component_1.HeroesListComponent,
                hero_card_component_1.HeroCardComponent,
                hero_editor_component_1.HeroEditorComponent
            ],
            exports: [
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [])
    ], HerosModule);
    return HerosModule;
}());
exports.HerosModule = HerosModule;
//# sourceMappingURL=heroes.module.js.map