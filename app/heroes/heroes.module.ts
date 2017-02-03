/**
 * Created by qibo on 11/9/16.
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {HeroDetailComponent} from './list/hero-detail.component';
import {HeroesComponent} from './list/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroService} from './service/hero.service';
import {HeroSearchComponent} from './list/hero-search.component';
import {HeroesListComponent} from './listedit/heroes-list.component';
import {HeroCardComponent} from "./listedit/hero-card.component";
import {HeroEditorComponent} from "./listedit/hero-editor.component";

@NgModule({
    // Here import SharedModule, so common pipe/directive/modules(CommonModule/FormsModule) can be used without import here
    imports: [ SharedModule],
    declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroesListComponent,
        HeroCardComponent,
        HeroEditorComponent
    ],
    exports: [
        HeroSearchComponent
    ],
    providers: [HeroService]
})

export class HerosModule {

}